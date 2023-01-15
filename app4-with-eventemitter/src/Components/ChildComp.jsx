import { useEffect } from "react";
import { emitter } from "./ParentComp";

export function ChildComponent() {
    useEffect(() => {
      emitter.on('someEvent', (data) => {
        console.log(data);
      });
  
      return () => {
        emitter.removeListener('someEvent',(data) => {
          console.log(data);
        });
      }
    }, []);
  
    return <div>I am listening for events</div>;
  }