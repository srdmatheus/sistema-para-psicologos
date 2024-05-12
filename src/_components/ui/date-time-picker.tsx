'use client';

import { useState } from 'react';

import { format } from 'date-fns';

import { Button } from './button';
import { Calendar } from './calendar';
import { Icon } from './icon';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

type HourType = {
  id: string;
  hour: string;
};

const hoursAvailable: HourType[] = [
  { id: '1', hour: '09h00' },
  { id: '2', hour: '10h00' },
  { id: '3', hour: '11h00' },
  { id: '4', hour: '12h00' },
  { id: '6', hour: '13h00' },
  { id: '7', hour: '13h00' },
  { id: '8', hour: '13h00' },
  { id: '9', hour: '13h00' },
  { id: '10', hour: '13h00' },
  { id: '11', hour: '13h00' },
  { id: '12', hour: '13h00' }
];

type DateTimePickerProps = {
  customerId: string;
};

export function DateTimePicker({ customerId }: DateTimePickerProps) {
  const [date, setDate] = useState<Date>();
  const [hour, setHour] = useState<HourType>();

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Icon.calendar size={16} />

            {date && hour
              ? format(date, 'dd/MM/yyyy') + ` ${hour?.hour}`
              : 'Selecione uma data'}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex items-start justify-between gap-2 bg-background-foreground">
            <div className="flex flex-col border-r">
              <span className="text-center text-sm font-semibold">Data</span>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </div>
            <div className="flex w-full flex-col overflow-y-auto pr-2">
              <span className="text-center text-sm font-semibold">Horário</span>
              <div className="mt-3.5 flex h-72 flex-col gap-1 overflow-y-auto px-2">
                {hoursAvailable.map((item) => (
                  <Button
                    key={item.id}
                    size="sm"
                    variant={item.id === hour?.id ? 'default' : 'outline'}
                    onClick={() => setHour(item)}
                  >
                    {item.hour}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
