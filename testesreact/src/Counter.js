import React from 'react';

function Counter(count) {
  return (
    <div className="Counter">
        <p>
          <h1>Edit <code>{count * 2}</code> and save to reload.</h1>
        </p>
    </div>
  );
}

export default Counter;
