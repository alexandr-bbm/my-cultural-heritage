import React, {
    PropTypes,
} from 'react';

const Filters = (props) => {
    return (
        <div>
            <header class="header">
                <div class="wrapper">
                    <div class="header__title">Моё культурное наследие</div>
                    <div class="header__tabs tabs">
                        <div class="tabs__item">Деревянное зодчество</div>
                        <div class="tabs__item">Памятники</div>
                        <div class="tabs__item">Монастыри и храмы</div>
                        <div class="tabs__item">Учебные заведения</div>
                    </div>
                </div>
            </header>
        </div>
    );
};

index.propTypes = {};
index.defaultProps = {};

export default Filters;
