import React from 'react';
import { SelectGroupContainer, SelectContainer } from './style';

const SelectGroup = ({ days, setDays, metric, setMetric }) => {
    return (
        <SelectGroupContainer>
            <SelectContainer className='custom-select-wrapper'>
                <label htmlFor="daysSelect">Dias: </label>
                <select
                    id="daysSelect"
                    className='custom-select'
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                >
                    <option value={7}>7 Dias</option>
                    <option value={14}>14 Dias</option>
                    <option value={30}>30 Dias</option>
                </select>
            </SelectContainer>
            <SelectContainer className='custom-select-wrapper'>
                <label htmlFor="metricSelect">Métricas: </label>
                <select
                    id="metricSelect"
                    className='custom-select'
                    value={metric}
                    onChange={(e) => setMetric(e.target.value)}
                >
                    <option value="likeCount">Likes</option>
                    <option value="repostCount">Reposts</option>
                    <option value="replyCount">Replies</option>
                    <option value="quoteCount">Quotes</option>
                </select>
            </SelectContainer>

        </SelectGroupContainer>
    );
};

export default SelectGroup;
// import React from 'react';
// import { SelectGroupContainer, SelectContainer } from './SelectGroupStyles';

// const SelectGroup = ({ days, setDays, metric, setMetric }) => {
//     return (
//         <SelectGroupContainer>
//             <SelectContainer className="select">
//                 <div className="selected">
//                     <span>Dias</span>
//                     <svg className="arrow" viewBox="0 0 20 20">
//                         <path d="M10 15l-5-5h10l-5 5z" />
//                     </svg>
//                 </div>
//                 <div className="options">
//                     <div className="option">
//                         <input type="radio" id="days-7" name="days" value="7" checked={days === 7} onChange={() => setDays(7)} />
//                         <label htmlFor="days-7" data-txt="7 Dias">7 Dias</label>
//                     </div>
//                     <div className="option">
//                         <input type="radio" id="days-14" name="days" value="14" checked={days === 14} onChange={() => setDays(14)} />
//                         <label htmlFor="days-14" data-txt="14 Dias">14 Dias</label>
//                     </div>
//                     <div className="option">
//                         <input type="radio" id="days-30" name="days" value="30" checked={days === 30} onChange={() => setDays(30)} />
//                         <label htmlFor="days-30" data-txt="30 Dias">30 Dias</label>
//                     </div>
//                 </div>
//             </SelectContainer>
//             <SelectContainer className="select">
//                 <div className="selected">
//                     <span>Métricas</span>
//                     <svg className="arrow" viewBox="0 0 20 20">
//                         <path d="M10 15l-5-5h10l-5 5z" />
//                     </svg>
//                 </div>
//                 <div className="options">
//                     <div className="option">
//                         <input type="radio" id="metric-likes" name="metric" value="likeCount" checked={metric === 'likeCount'} onChange={() => setMetric('likeCount')} />
//                         <label htmlFor="metric-likes" data-txt="Likes">Likes</label>
//                     </div>
//                     <div className="option">
//                         <input type="radio" id="metric-reposts" name="metric" value="repostCount" checked={metric === 'repostCount'} onChange={() => setMetric('repostCount')} />
//                         <label htmlFor="metric-reposts" data-txt="Reposts">Reposts</label>
//                     </div>
//                     <div className="option">
//                         <input type="radio" id="metric-replies" name="metric" value="replyCount" checked={metric === 'replyCount'} onChange={() => setMetric('replyCount')} />
//                         <label htmlFor="metric-replies" data-txt="Replies">Replies</label>
//                     </div>
//                     <div className="option">
//                         <input type="radio" id="metric-quotes" name="metric" value="quoteCount" checked={metric === 'quoteCount'} onChange={() => setMetric('quoteCount')} />
//                         <label htmlFor="metric-quotes" data-txt="Quotes">Quotes</label>
//                     </div>
//                 </div>
//             </SelectContainer>
//         </SelectGroupContainer>
//     );
// };

// export default SelectGroup;