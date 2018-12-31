import React from 'react';
import styled from 'styled-components';
import {Line} from 'react-chartjs-2';

const SettingsOverlay = styled.div `
    position: fixed; 
    display: block; 
    margin: auto auto;
    padding: 10px 10px;
    width: 700px; 
    height: auto; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2; 
`;

const SettingsOverlayContent = styled.div `
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
`;

const SettingsOverlayHeader = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
`;

const ModuleLineWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap:nowrap;
    padding: 5px 10px ;
    font-weight: normal;
    font-size: 16px;
    height: 30px;
`;

const ModuleLineBeginningWrapper = styled.div `
    display: flex;
    justify-content: flex-start;
`;

const ModuleLineNumberWrapper = styled.p `
    width: 35px;
`;

const ModuleHeadingCloseButton = styled.button `
    width: 100px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    text-align:center;
    border: none;
    border-radius: 7px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    outline:none
`;

const ChangePullUpButtonWrapper = styled.button `
    width: 120px;
    font-weight: normal;
    color: #000;
    background-color: #fff;
    text-align:center;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    outline:none
`;

const ChangeVoltageButtonWrapper = styled.button `
    width: 50px;
    font-weight: normal;
    color: #000;
    background-color: #fff;
    text-align:center;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    outline:none
`;

function createGraph(xData, yData) {
    let data= {
        labels: xData,
        datasets: [{
            label: "GPIO sample",
            borderColor: '#6534ff',
            cubicInterpolationMode: 'default',
            lineTension: 0.2,
            steppedLine: true,
            data: yData,
        }]
    }

    let options= {
        scales: {
            yAxes: [{
                stacked: true
            }]
        },
        animation: {
            duration: 0, // general animation time
        },
    }

    return <Line data={data} options={options} />
}

function createGraphOverlay(graphVisible, 
                                hideGraphHandler, 
                                moduleID,
                                xData, 
                                yData) {



    if(graphVisible === false) {
        // return();
    }
    else if(graphVisible === true) {
        return (
            <SettingsOverlay>
                <SettingsOverlayContent>
                    <SettingsOverlayHeader>
                        <h2>GPIO Graph</h2>
                        <ModuleHeadingCloseButton 
                            onClick={() => hideGraphHandler()}
                        >
                            Close
                        </ModuleHeadingCloseButton>
                    </SettingsOverlayHeader>

                    {createGraph(xData, yData)}

                </SettingsOverlayContent>
            </SettingsOverlay>
        );
    }
}

function Graph(props) {
    return (
        <div>
            {createGraphOverlay(props.graphVisible, 
                                    props.hideGraphHandler, 
                                    props.moduleID,
                                    props.xData,
                                    props.yData)}
            <h1>{props.update}</h1>
        </div>
    );
}

export default Graph;