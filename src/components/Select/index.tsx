'use client'
import { FC } from 'react';
import { ISelect } from './types';
import ReactSelect from 'react-select';
import style from './styles.module.css';
import { Controller } from 'react-hook-form';

export const CustomSelect: FC<ISelect> = ({ errors, label, name, rules, control, defaultValue, isMulti, options, styles }) => {
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
                        {...field}
                        styles={styles}
                        isMulti={isMulti}
                        options={options}
                        className={style.Select}
                        onChange={(change) => { field.onChange(change?.value) }}
                        value={options?.find((x) => x?.value === field?.value)}
                    />
                )}
            />
            <span style={{ color: 'red', height: '22px' }}>{errors && errors.message}</span>
        </label>
    )
}
