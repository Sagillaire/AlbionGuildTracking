'use client'
import { FC } from 'react';
import { ISelect } from './types';
import ReactSelect from 'react-select';
import style from './styles.module.css';
import { Controller } from 'react-hook-form';

export const CustomSelect: FC<ISelect> = ({ label, name, rules, control, defaultValue, isMulti, options, styles }) => {
    return (
        <label className={style.labelName}>
            <span className={style.spanName}>
                {label}
            </span>
            <Controller
                name={name}
                rules={rules}
                control={control}
                defaultValue={defaultValue}
                render={({ field }) => (
                    <ReactSelect
                        className={style.Select}
                        isMulti={isMulti}
                        options={options}
                        styles={styles}
                        {...field}
                    />
                )}
            />
        </label>
    )
}
