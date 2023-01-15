import { EventEmitter } from 'events';
import { useEffect } from 'react';
import { ChildComponent } from './ChildComp';

export const emitter = new EventEmitter();

export function ParentComponent() {
  const handleClick = () => {
    emitter.emit('someEvent', { data: 'Hello World' });
  };

  return (
    <div>
      <button onClick={handleClick}>Emit Event</button>
      <ChildComponent />
    </div>
  );
}


