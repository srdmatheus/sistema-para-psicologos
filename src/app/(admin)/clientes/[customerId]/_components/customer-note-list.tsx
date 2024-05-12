'use client';

import { useState } from 'react';

import { Button } from '@/_components';
import { Note } from '@prisma/client';
import { format } from 'date-fns';

type CustomerNotesListProps = {
  notes: Note[];
};

export const CustomerNotesList = ({ notes }: CustomerNotesListProps) => {
  const [selectedNode, setSelectedNote] = useState<Note>();

  const handleSetNote = (noteId: string) => {
    const note = notes.find((note) => noteId === note.id);

    if (note) setSelectedNote(note);
  };

  return (
    <div className="h-content flex items-start justify-between gap-3 divide-x">
      <div className="flex flex-col gap-2 ">
        {notes.map((note) => (
          <Button
            key={note.id}
            onClick={() => handleSetNote(note.id)}
            variant={selectedNode?.id === note.id ? 'default' : 'outline'}
          >
            {format(note.createdAt, 'dd/MM/yyyy')}
          </Button>
        ))}
      </div>
      {selectedNode && (
        <div className="h-full flex-1 px-4">
          <span className="text-xs font-extrabold uppercase tracking-wide">
            Anotação criada dia:{' '}
            {format(selectedNode.createdAt, "dd/MM/yyyy 'às' hh'h'mm")}
          </span>
          <p>{selectedNode.note}</p>
        </div>
      )}
    </div>
  );
};
