import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const cd_nm = {
    '시도': {nm: 'orgdownNm', cd: 'orgCd'},
    '시군구': {nm: 'orgdownNm', cd: 'orgCd'},
    '동물': {nm: 'orgdownNm', cd: 'orgCd'},
    '보호소': {nm: 'careNm', cd: 'careRegNo'},
    '종류': {nm: 'KNm', cd: 'kindCd'}
};

function DropDownMenu({name, engName, list, onChangeParent}) {
    const [currentItem, setCurrentItem] = useState({orgCd: 0, orgdownNm: '전체'});
    const [isInitialState, setIsInitialState] = useState(true);
    
    const onChange = (eventKey) => {
        const [orgdownNm, orgCd] = eventKey.split('|');
        const cd_nm = {orgCd, orgdownNm}
        setCurrentItem(cd_nm);
        onChangeParent({name: engName, value: cd_nm});
        setIsInitialState(false);
    }

    return (
        <>
            <Dropdown onSelect={onChange}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {isInitialState? name: currentItem.orgdownNm}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#" eventKey="전체" key="전체">전체</Dropdown.Item>
                    {
                        list.map((item, idx) => {
                            return <Dropdown.Item href="#" eventKey={`${item[cd_nm[name].nm]}|${item[cd_nm[name].cd]}`} key={idx}>
                                {item[cd_nm[name].nm]}
                            </Dropdown.Item>
                        }
                        )
                    }
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default DropDownMenu;