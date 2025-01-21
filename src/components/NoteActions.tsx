"use client"
import { useState } from 'react';

interface NoteActionsProps {
    id: string;
    isChange: (bool: boolean) => void;
    actionFunc: (id: string, content: string) => void;
    actionText: string;
    actionType: (actionType: string) => void;
    textArea?: string;
}

export default function NoteActions(
    { id, isChange, actionFunc, actionText, actionType, textArea }: NoteActionsProps) {

    const [newText, setNewText] = useState(textArea || "");

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-full h-full z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg">
                {(actionText.length <= 1) ?
                    (
                        <textarea
                            className="w-full h-40 p-2 border border-gray-300 rounded"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                        />
                    ) :
                    <p>{actionText}</p>}
                <div className="flex justify-end space-x-2 mt-4">
                    <button
                        onClick={() => {
                            isChange(false);
                            actionType("none");
                        }}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                    >
                        Cancelar
                    </button>
                    {(actionText.length <= 1) ?
                        <button
                            onClick={() => {
                                actionFunc(id, newText);
                                isChange(false);
                                actionType("none");
                            }}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        >
                            Guardar
                        </button> :
                        <button
                            onClick={() => {
                                actionFunc(id, "");
                                isChange(false);
                                actionType("none");
                            }}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                        >
                            Eliminar
                        </button>
                    }
                </div>
            </div>
        </div>
    )
};