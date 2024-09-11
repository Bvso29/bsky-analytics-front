import { useEffect } from 'react';
import { StyledAss001, StyledCen003, StyledTit002 } from "@/app/variaveis";
import { StyledSpan } from '../Interactions/InteractionsItem/style';
import { StyledInteractionsGraphic } from "./style";
import ApexCharts from 'apexcharts';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { InteractionsCard } from '../Interactions/InteractionsItem';

dayjs.extend(quarterOfYear);

const options = {
    series: [{
        name: 'Audiencia',
        data: [{
            x: '01 dec',
            y: 400
        }, {
            x: '01 dec',
            y: 430
        }, {
            x: '01 dec',
            y: 448
        }, {
            x: '01 dec',
            y: 470
        }, {
            x: '01 dec',
            y: 540
        }, {
            x: '01 dec',
            y: 580
        }, {
            x: '01 dec',
            y: 690
        }, {
            x: '01 dec',
            y: 690
        }]
    }],
    chart: {
        type: 'bar',
        height: 380,
        toolbar: {
            show: false // Adiciona esta linha para remover a marca d'água
        }
    },
    colors: ['var(--Cor002)'], // Define a cor das barras
    plotOptions: {
        bar: {
            columnWidth: '50%', // Define a largura das barras (50% do espaço disponível)
            borderRadius: 4, // Define o border-radius das barras
            borderRadiusApplication: 'end', // Aplica o border-radius no topo das barras
            borderRadiusWhenStacked: 'all' // Aplica o border-radius em todas as barras quando empilhadas
        }
    },
    xaxis: {
        type: 'Interações',
        labels: {
            formatter: function (val) {
                return dayjs(val).format('DD MMM'); // Formata os rótulos do eixo X para mostrar o dia e o mês
            }
        },
        axisBorder: {
            show: false // Remove a linha do eixo X
        },
        axisTicks: {
            show: false // Remove os ticks do eixo X
        },
        group: {
            style: {
                fontSize: '10px',
                fontWeight: 700
            },
            groups: [
                { title: '2019', cols: 1 },
                { title: '2020', cols: 2 },
                { title: '2021', cols: 3 },
                { title: '2022', cols: 4 },
                { title: '2023', cols: 5 },
                { title: '2024', cols: 6 },
                { title: '2025', cols: 7 }
            ]
        }
    },
    grid: {
        borderColor: '#e0e0e0', // Define a cor das linhas horizontais
        strokeDashArray: 5, // Define as linhas horizontais como pontilhadas com espaçamento de 5
        xaxis: {
            lines: {
                show: false // Remove a linha do eixo X
            }
        }
    }
};



export function InteractionsGraphic() {
    useEffect(() => {
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
        return () => {
            chart.destroy();
        };
    }, []);


    return (
        <StyledInteractionsGraphic>
            <div className="cen_002" >
                <div className='container'>
                    <div className="con_inf_gra">
                        <InteractionsCard className={"grapgic Ite_Pad"} description={"Audience"} number={"301,097"} spanValue={"58.31"} spanStyle={"styleUp"} days={"for 7 last days"} />
                    </div>
                    <div className="con_gra_int">
                        <div className="graphic" id="chart">

                        </div>
                    </div>
                </div>
            </div>
        </StyledInteractionsGraphic>
    );
}