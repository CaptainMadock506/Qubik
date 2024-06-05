import { FC, ChangeEvent } from "react";

type InputEvent = ChangeEvent<HTMLInputElement>;

interface ObjInput {
    id: string,
    type: string,
    value: string,
    setState(val: string): void
}

const Input: FC<ObjInput> = ({ id, type, value, setState }: ObjInput) => {
    return (
        <div>
            <label htmlFor={id}>
                <span className="qu_form-label">
                    {id}
                </span>
                <input
                    id={id}
                    type={type}
                    placeholder=""
                    value={value}
                    className="qu_form-input"
                    onChange={(e: InputEvent) => setState(e.target.value)} />
            </label>
        </div>
    );
}

export default Input; 