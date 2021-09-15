import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { actionClearLink, getLink } from '../../store/link';
import { format } from 'date-fns';
import LoadingIcon from '../LoadingIcon/LoadingIcon';

import './styles.scss';

let checkDataLinkTimeout = null;

export default function LinkInformation() {
    const { link } = useSelector((state) => state.linkReducer);
    const [isLoading, setIsLoading] = useState(true);
    const { clicks, date, from, to } = link;
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const { token } = useContext(AuthContext);

    const findLinkId = match.params.id;

    async function handlerFindLinkId() {
        await dispatch(getLink({ token, linkId: findLinkId }));
        setIsLoading(false);
    };

    const parseDate = Date.parse(date);

    const formatDate = () => {
        return format(parseDate, 'PPpp')
    };

    const checkDataLinkId = async (firstLoad = false) => {
        checkDataLinkTimeout = (firstLoad || checkDataLinkTimeout) && setTimeout(async () => {
            handlerFindLinkId();
            checkDataLinkId();
        }, 1000);
    };

    useEffect(() => {
        handlerFindLinkId();
        checkDataLinkId(true);
        return () => {
            dispatch(actionClearLink());
            checkDataLinkTimeout = null;
            setIsLoading(true);
            clearTimeout(checkDataLinkId)
        }
    }, []);

    return (
        <>
            <div className="link__header">
                <strong>Информация о ссылке</strong>
                {' ' + findLinkId}
            </div>
            { isLoading ? <LoadingIcon /> :
                <ul className="link__info">
                    <li><strong>Оригинальная ссылка:</strong><a href={from} target="_blank">{' ' + from}</a></li>
                    <li><strong>Сокращенная ссылка:</strong><a href={to} target="_blank">{' ' + to}</a></li>
                    <li><strong>Дата создания:</strong>{date && ' ' + formatDate()}</li>
                    <li><strong>Кликов:</strong>{' ' + clicks}</li>
                </ul>
            }
        </>
    )
}
