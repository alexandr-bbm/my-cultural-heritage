import React, {PropTypes} from 'react';
import ObjectSlider from './ObjectSlider';

import './style.scss';

const customContentStyle = {
    width: '100%',
    maxWidth: 'none',
    height: '100vh'
};

export default class ObjectView extends React.Component {

    static propTypes = {
        object: PropTypes.object
    };

    render () {
        const { object } = this.props;
        return (
            <div className="object-view">
                <div>
                    <ObjectSlider />
                </div>
                <div className="object-view__description">
                    1. В соответствии со статьями 17, 18 Федерального закона от 25 июня 2002 года № 73-ФЗ «Об объектах культурного наследия (памятниках истории и культуры) народов Российской Федерации», статьями 3, 7 Закона Томской области от 12 декабря 2006 года № 304-ОЗ «Об объектах культурного наследия (памятниках истории и культуры) Томской области», Положением о едином государственном реестре объектов культурного наследия (памятников истории и культуры) народов Российской Федерации, утвержденным приказом Министерства культуры Российской Федерации от 03.10.2011 № 954 «Об утверждении Положения о едином государственном реестре объектов культурного наследия (памятников истории и культуры) народов Российской Федерации», актом госу
                </div>
            </div>
        )
    }
}
