"use client"

import React, { useState } from 'react';
import { DndContext, closestCenter, useSensor, useSensors, TouchSensor, MouseSensor } from '@dnd-kit/core';
import { arrayMove, useSortable, SortableContext } from '@dnd-kit/sortable';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import { PlusCircleIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import NoteActions from '../../../components/NoteActions';

interface Note {
    id: string;
    content: string;
};

const NoteCard: React.FC<
    {
        note: Note;
        index: number;
        editNote: (id: string, newContent: string) => void;
        deleteNote: (id: string) => void;
    }
> =
    ({ note, editNote, deleteNote }) => {

        const [isChange, setIsChange] = useState<boolean>(false);
        const [actionType, setActionType] = useState<string>("none");

        const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
            id: note.id,
            disabled: isChange,
        });

        const style = {
            transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
            transition,
        };

        return (
            <div
                ref={setNodeRef}
                {...attributes}
                {...listeners}
                style={style}
                className="bg-white dark:bg-gray-800 shadow-md rounded p-4 border border-gray-200 flex flex-col gap-2 relative "
            >
                <p
                    className="text-pColor dark:text-pColor w-full h-auto bg-transparent focus:outline-none resize-none"
                >
                    {note.content}
                </p>
                <div className="flex justify-end space-x-2 ">
                    <button
                        onMouseUp={() => {
                            setIsChange(true);
                            setActionType("delete");
                        }}
                        className="p-1 text-red-500 hover:text-red-700"
                    >
                        <TrashIcon className="h-5 w-5" />
                    </button>
                    {isChange && actionType === "delete" && <NoteActions
                        id={note.id}
                        isChange={setIsChange}
                        actionFunc={deleteNote}
                        actionText="¿Estás seguro de eliminar esta nota?"
                        actionType={setActionType}
                        textArea={note.content}
                    />
                    }

                    <button
                        onMouseUp={() => {
                            setIsChange(true);
                            setActionType("edit");
                        }}
                        className="p-1 text-blue-500 hover:text-blue-700"
                    >
                        <PencilIcon className="h-5 w-5" />
                    </button>
                    {isChange && actionType === "edit" && <NoteActions
                        id={note.id}
                        isChange={setIsChange}
                        actionFunc={editNote}
                        actionText=""
                        actionType={setActionType}
                        textArea={note.content}
                    />
                    }

                </div>
            </div>
        );
    };
export default function Notes() {

    //TODO: notas hardcodeadas
    const [notes, setNotes] = useState<Note[]>([
        { id: '1', content: 'Arreglar los bug del proyecto KFC' },
        { id: '2', content: 'Preguntar cuando cobro' },
        { id: '3', content: 'No olvidar hacer un pull antes de hacer un push' },
    ]);

    const sensors = useSensors(
        useSensor(MouseSensor), // Para escritorio
        useSensor(TouchSensor, {
            // Configuración para dispositivos táctiles
            activationConstraint: {
                delay: 250, // Tiempo de espera antes de activar el arrastre
                tolerance: 5, // Tolerancia en píxeles antes de activar el arrastre
            },
        })
    );

    // Agregar una nueva nota
    //TODO: Ahora toma el date, pero cuando lea la base de datos tomará el id
    const addNote = () => {
        const newNote: Note = {
            id: Date.now().toString(),
            content: 'Nueva Nota',
        };
        setNotes((prev) => [...prev, newNote]);
    };

    // Editar el contenido de una nota
    const editNote = (id: string, newContent: string) => {
        setNotes((prev) =>
            prev.map((note) => (note.id === id ? { ...note, content: newContent } : note))
        );
    };

    // Eliminar una nota
    const deleteNote = (id: string) => {
        setNotes((prev) => prev.filter((note) => note.id !== id));
        console.log("Boton de eliminar notas")
    };

    // Manejar reordenamiento
    const handleDragEnd = ({ active, over }: any) => {
        if (active.id !== over.id) {
            const oldIndex = notes.findIndex((note) => note.id === active.id);
            const newIndex = notes.findIndex((note) => note.id === over.id);
            setNotes(arrayMove(notes, oldIndex, newIndex));
        }
    };
    return (
        <section className="mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-hColor dark:text-hColor text-2xl">
                Notas
            </h1>
            <DndContext
                onDragEnd={handleDragEnd}
                collisionDetection={closestCenter}
                modifiers={[restrictToParentElement]}
                sensors={sensors}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={addNote}
                            className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
                        >
                            <PlusCircleIcon className="h-6 w-6" />
                            <span>Agregar Nota</span>
                        </button>
                    </div>
                    {!(notes.length === 0) &&
                        <SortableContext items={notes.map((note) => note.id)}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {notes.map((note, index) => (
                                    <NoteCard
                                        key={note.id}
                                        note={note}
                                        index={index}
                                        editNote={editNote}
                                        deleteNote={deleteNote}
                                    />
                                ))}
                            </div>
                        </SortableContext>
                    }
                </div>
            </DndContext>
        </section>
    )
}