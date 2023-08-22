'use client'
import dayjs from 'dayjs';
import { FC } from 'react';
import { ICustomInput } from './types';
import { BiLock } from 'react-icons/bi';
import styles from './styles.module.css';
import { Controller } from 'react-hook-form';
import { Button, Form, Input, Space, TimePicker } from 'antd';

export const CustomInput: FC<ICustomInput> = ({ label, type, name, rules, control, errors, defaultValue, placeholder, prefix, btnLabel, disabled, loading, onClick, format }) => {
    return (
        <label className={styles.labelName}>
            <span className={styles.spanName}>
                {label}
            </span>
            <Form.Item help={errors && errors.message} validateStatus={errors ? 'error' : ''}>
                <Space.Compact style={{ width: '100%' }}>
                    {type === undefined && (
                        <Controller
                            name={name}
                            rules={rules}
                            control={control}
                            defaultValue={defaultValue}
                            render={({ field }) => (
                                <Input
                                    placeholder={placeholder}
                                    disabled={disabled}
                                    prefix={prefix}
                                    size='large'
                                    {...field}
                                />
                            )}
                        />
                    )}

                    {type === 'password' && (
                        <Controller
                            name={name}
                            rules={rules}
                            control={control}
                            defaultValue={defaultValue}
                            render={({ field }) => (
                                <Input.Password
                                    placeholder={placeholder}
                                    disabled={disabled}
                                    prefix={<BiLock />}
                                    size='large'
                                    {...field}
                                />
                            )}
                        />
                    )}

                    {type === 'time' && (
                        <Controller
                            name={name}
                            rules={rules}
                            control={control}
                            defaultValue={dayjs('00:00', 'HH:mm')}
                            render={({ field }) => (
                                <TimePicker
                                    format={format || 'HH:mm'}
                                    disabled={disabled}
                                    size='large'
                                    {...field}
                                />
                            )}
                        />
                    )}

                    {onClick && (
                        <Button size='large' type="primary" onClick={onClick} loading={loading} disabled={disabled}>
                            {btnLabel}
                        </Button>
                    )}
                </Space.Compact>
            </Form.Item>
        </label>
    );
};
