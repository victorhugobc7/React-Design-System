import styles from './checkbox.module.css';
import {FC} from 'react';

interface CheckboxProps {
    children: React.ReactNode;
    checked?: boolean;
}

function Checkbox({children, checked}: CheckboxProps){
    return <>
    <div className='wrapper'>
        <input type='checkbox' className={styles.customCheckbox}></input>
        <label className='bodyRegular'>
            {children}
        </label>
    </div>
    </>
}

export default Checkbox