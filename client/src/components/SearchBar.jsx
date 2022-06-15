import { BsCalendarDate } from 'react-icons/bs'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

const SearchBar = () => {
    const [dateVisible, setDateVisible] = useState(false)
    const [roomOptionModule, setRoomOptionMoudle] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [roomOptions, setRoomOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const handleRoomOptionsButtons = (type, ctg) => {
        if (type == "increase" && ctg == "adult") {
            setRoomOptions({ ...roomOptions, adult: roomOptions.adult < 4 ? roomOptions.adult + 1 : 4 })
        } else if (type == "decrease" && ctg == "adult") {
            setRoomOptions({ ...roomOptions, adult: roomOptions.adult > 0 ? roomOptions.adult - 1 : 0 })
        } else if (type == "increase" && ctg == "children") {
            setRoomOptions({ ...roomOptions, children: roomOptions.children < 3 ? roomOptions.children + 1 : 3 })
        } else if (type == "decrease" && ctg == "children") {
            setRoomOptions({ ...roomOptions, children: roomOptions.children > 0 ? roomOptions.children - 1 : 0 })
        } else if (type == "increase" && ctg == "room") {
            setRoomOptions({ ...roomOptions, room: roomOptions.room < 4 ? roomOptions.room + 1 : 4 })
        } else if (type == "decrease" && ctg == "room") {
            setRoomOptions({ ...roomOptions, room: roomOptions.room > 0 ? roomOptions.room - 1 : 0 })
        }
    }

    return <section className='bookingBar'>
        <input type="text" placeholder="Where To?" />
        <div onClick={() => setDateVisible(!dateVisible)} className="date">
            <BsCalendarDate /> {`${format(date[0].startDate, "MM/dd/yyyy")} To ${format(date[0].endDate, "MM/dd/yyyy")}`}
        </div>
        <div onClick={() => setRoomOptionMoudle(!roomOptionModule)} className='peopleAmount'>
            <span>{`${roomOptions.adult} Adult`}</span>
            <span>{`${roomOptions.children} Children`}</span>
            <span>{`${roomOptions.room} Room`}</span>
        </div>
        <div className='dateSelctor' style={{ display: dateVisible ? "block" : "none" }}>
            <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
            />
        </div>
        <div style={{ display: roomOptionModule ? "block" : "none" }} className='roomOption'>
            <ul>
                <li>
                    Adult:
                    <div>
                        <button onClick={() => handleRoomOptionsButtons("decrease", "adult")}>-</button>
                        {roomOptions.adult}
                        <button onClick={() => handleRoomOptionsButtons("increase", "adult")}>+</button>
                    </div>
                </li>
                <li>
                    Children:
                    <div>
                        <button onClick={() => handleRoomOptionsButtons("decrease", "children")}>-</button>
                        {roomOptions.children}
                        <button onClick={() => handleRoomOptionsButtons("increase", "children")}>+</button>
                    </div>
                </li>
                <li>
                    Room:
                    <div>
                        <button onClick={() => handleRoomOptionsButtons("decrease", "room")}>-</button>
                        {roomOptions.room}
                        <button onClick={() => handleRoomOptionsButtons("increase", "room")}>+</button>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}
export default SearchBar;