import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import './style.scss';

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

class Filters extends React.Component {
    handleActive = (tab)=> {
        var filter = tab.props.value;
        this.props.onFilter(filter)
    };

    handleRadioChange = (event, value)=> {
        this.props.onFilter(value)
    };

    render() {
        return (
            <div><Tabs className="tabs">
                <Tab className="tab" value="all" label="Все" onActive={this.handleActive}/>
                <Tab className="tab" value="деревянные" label="Деревянное зодчество" onActive={this.handleActive}/>
                <Tab className="tab" value="памятники" label="Памятники" onActive={this.handleActive}/>
                <Tab className="tab" value="храмы и монастыри" label="Монастыри и храмы" onActive={this.handleActive}/>
                <Tab className="tab" value="учебные заведения" label="Учебные заведения" onActive={this.handleActive}/>
            </Tabs>
                <Card className="mobile-tabs">
                    <CardHeader
                        title="Фильтры"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                        <div >
                            <RadioButtonGroup name="group" defaultSelected={this.props.filter} onChange={this.handleRadioChange}>
                                <RadioButton
                                    value="all"
                                    label="Все"
                                    style={styles.radioButton}
                                />
                                <RadioButton
                                    value="деревянные"
                                    label="Деревянное зодчество"
                                    style={styles.radioButton}

                                />
                                <RadioButton
                                    value="памятники" label="Памятники"
                                    style={styles.radioButton}
                                />
                                <RadioButton
                                    value="храмы и монастыри" label="Монастыри и храмы"
                                    style={styles.radioButton}
                                />
                                <RadioButton
                                    value="учебные заведения" label="Учебные заведения"
                                    style={styles.radioButton}
                                />

                            </RadioButtonGroup>
                        </div>
                    </CardText>
                </Card>

            </div>


        )
    }
}

export default Filters;