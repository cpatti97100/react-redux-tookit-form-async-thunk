import React, { useState } from 'react';

import styles from './Input.module.scss';

function Input({ type, name }: { type: string; name: string }) {
    const [value, setValue] = useState('');

    return (
        <label className={styles.label} htmlFor={`${name}-input`}>
            <span>{name}:</span>
            {type === 'textarea' ? (
                <textarea
                    id={`${name}-input`}
                    data-testid={`${name}-input`}
                    name={name}
                    onChange={(event) => setValue(event.currentTarget.value)}
                    required
                    value={value}
                />
            ) : (
                <input
                    id={`${name}-input`}
                    data-testid={`${name}-input`}
                    name={name}
                    type={type}
                    onChange={(event) => setValue(event.currentTarget.value)}
                    required
                    value={value}
                />
            )}
        </label>
    );
}

export default Input;
