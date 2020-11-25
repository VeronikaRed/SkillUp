import { forwardRef } from 'react';

export const LoginInput = forwardRef(({ value, onChange }, forwardedRef) => {
    console.log('login');
    return (
        <div className="Logininput">
            <input
                type="text"
                name="login"
                placeholder="Login"
                autoComplete="off"
                // value={value}
                // onChange={onChange}
                ref={forwardedRef}
            />
        </div>
    );
});
