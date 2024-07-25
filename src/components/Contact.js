import React, { useReducer } from 'react';

// Der Reducer, der den Zustand zu den Aktionen aktualisiert
const reducer = (state, action) => {
    switch (action.type) {
        case 'updateField':
            return {
                ...state,
                [action.field]: action.value,
                error: '' // Fehlermeldung leeren, wenn Feld aktualisiert wird
            };
        case 'setError':
            return {
                ...state,
                error: action.error // Fehlermeldung setzen
            };
        default:
            return {
                ...state,
                error: 'Irgendwas ist schiefgelaufen!' // Standard Fehlermeldung
            };
    }
};

export default function Contact() {
    // Anfangszustand des Formulars
    const initialState = { name: '', email: '', message: '', error: '' };

    // useReducer Hook, der den Zustand und die Dispatch-Funktion bereitstellt
    const [state, dispatch] = useReducer(reducer, initialState);

    // Funktion zu änderungen in den Eingabefeldern
    const handleChange = (e) => {
        dispatch({
            type: 'updateField',
            field: e.target.name,
            value: e.target.value
        });
    };

    // Funktion für das Formular Submit Event
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validierung des Namens
        if (state.name.length < 2) {
            dispatch({
                type: 'setError',
                error: 'Name muss mindestens 2 Zeichen lang sein!'
            });
            return;
        }
        // Validierung der E-Mail
        if (!state.email) {
            dispatch({
                type: 'setError',
                error: 'Emailfeld darf nicht leer sein!'
            });
            return;
        }
        // Validierung der Nachricht
        if (state.message.length < 10) {
            dispatch({
                type: 'setError',
                error: 'Nachricht muss mindestens 10 Zeichen lang sein!'
            });
            return;
        }
        // Alert, wenn das Formular korrekt ausgefüllt wurde
        alert(`Name: ${state.name}, Email: ${state.email}, Nachricht: ${state.message}`);
    };

    return (
        <div name='contact' id='contact' className='w-full h-screen bg-[#17191A] flex justify-center items-center p-4'>
            <div className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0099CC] text-[#E5E5E5]'>Kontakt</p>
                    <p className='text-[#E5E5E5] py-4'>Sende mir eine Nachricht</p>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input
                        className='bg-[#E5E5E5] p-2 mb-4 rounded-md'
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={state.name}
                        onChange={handleChange}
                    />
                    <input
                        className='bg-[#E5E5E5] p-2 mb-4 rounded-md'
                        type='email'
                        placeholder='E-Mail'
                        name='email'
                        value={state.email}
                        onChange={handleChange}
                    />
                    <textarea
                        className='bg-[#E5E5E5] p-2 mb-4 rounded-md'
                        name='message'
                        rows='10'
                        placeholder='Nachricht'
                        value={state.message}
                        onChange={handleChange}
                    >
                    </textarea>

                    {state.error && <p className='text-red-500'>{state.error}</p>}
                    <button className='text-[#E5E5E5] border-2 hover:bg-[#0099CC] hover:border-[#0099CC] px-4 py-3 mt-4 mx-auto flex items-center rounded-md' type='submit'>Senden</button>
                </form>
            </div>
        </div>
    );
};
