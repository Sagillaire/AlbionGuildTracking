'use client'
import { FC } from 'react';
import { ICustomInput } from './types';
import { BiLock } from 'react-icons/bi';
import { Controller } from 'react-hook-form';
import { Button, Form, Input, Space } from 'antd';

export const CustomInput: FC<ICustomInput> = ({ type, name, rules, control, errors, defaultValue, placeholder, prefix, btnLabel, disabled, loading, onClick }) => {
    return (
        <Form.Item
            help={errors && errors.message}
            validateStatus={errors ? 'error' : ''}
        >
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

                {onClick && (
                    <Button size='large' type="primary" onClick={onClick} loading={loading} disabled={disabled}>
                        {btnLabel}
                    </Button>
                )}
            </Space.Compact>
        </Form.Item>
    );
};
