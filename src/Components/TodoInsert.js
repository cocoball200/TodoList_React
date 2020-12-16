import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => { // onInsert callback 함수형 .
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, [])

    const onSubmit = useCallback((e) => {
        onInsert(value);
        setValue('');
        e.preventDefault(); // 이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지않고 그 이벤트를 취소합니다.
    }, [onInsert, value]);

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할 일을 입력하세요' value={value} onChange={onChange} />
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    );
}


export default TodoInsert;