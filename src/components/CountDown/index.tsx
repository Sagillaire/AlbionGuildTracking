'use client'
import { Tag } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { CountDownProps } from './types';
import { useState, useEffect } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const calculateRemainingTime = (targetTime: Dayjs) => {
    const diff = targetTime.diff(dayjs(), 'second');
    return diff <= 0 ? 0 : diff;
};

const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const parseRemainingSave = (remainingSave: { updatedAt: string; timeHour: string }) => {
    const { updatedAt, timeHour } = remainingSave;
    const [hoursStr, minutesStr] = timeHour.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    return dayjs(updatedAt).add(hours, 'hour').add(minutes, 'minute');
};

export const CountDown: React.FC<CountDownProps> = ({ remainingSave }) => {
    const targetTime = parseRemainingSave(remainingSave);
    const initialRemainingTime = calculateRemainingTime(targetTime);
    const [remainingTime, setRemainingTime] = useState<number>(initialRemainingTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => {
                if (prevRemainingTime > 0) {
                    return prevRemainingTime - 1;
                }
                return 0;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [initialRemainingTime]);

    let tagColor = 'green';

    if (remainingTime < 3600) {
        tagColor = 'red';
    } else if (remainingTime < 14400) {
        tagColor = 'orange';
    }

    return <Tag color={tagColor}>{formatTime(remainingTime)}</Tag>;
};
