import DropDownMenu from "./DropDownMenu";
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { StateContext, DispatchContext } from './Context.js';

async function getData(endpoint, param = {}) {
    const fetch = await axios.get(endpoint, {params: {...param, ServiceKey: process.env.REACT_APP_KEY}});
    let ret = fetch.data.response.body.items;
    if (!ret) return [];
    else if ("item" in ret) {
        if (ret.item.constructor == Object) return [ret.item];
        else return ret.item;
    }
}

function DropDownBar() {
    const state = useContext(StateContext);
    window.state = state;

    const dispatch = useContext(DispatchContext);
    
    const {sido, sigungu, upkind, shelter, kind, sidoList, sigunguList, upkindList, kindList, shelterList, pageNo} = state;
    
    useEffect(() => {
        getData('/sido').then(res => dispatch({type: 'SET', name: 'sidoList', value: res}));
    }, []);

    useEffect(() => {
        dispatch({type: 'SET', name: 'sigungu', value: {orgCd: null, orgNm: '전체'}});
        dispatch({type: 'SET', name: 'sigunguList', value: [{orgCd: null, orgNm: '전체'}]})
        getData('/sigungu', {upr_cd: sido.orgCd}).then(res => dispatch({type: 'SET', name: 'sigunguList', value: res}));
        return () => {
        }
    }, [sido]);

    useEffect(() => {
        dispatch({type: 'SET', name: 'shelter', value: {careRegNo: null, careNm: '전체'}});
        getData('/shelter', {upr_cd: sido.orgCd, org_cd: sigungu.orgCd}).then(res => dispatch({type: 'SET', name: 'shelterList', value: res}));
    }, [sigungu]);

    useEffect(() => {
        dispatch({type: 'SET', name: 'kind', value: {kindCd: null, KNm: '전체'}});
        getData('/kind', {up_kind_cd: upkind.orgCd}).then(res => dispatch({type: 'SET', name: 'kindList', value: res}));
    }, [upkind]);
    
    useEffect(() => {
        getData('/abandonmentPublic', {bgnde: '20220101', endde: '20220125', upkind: upkind.orgCd, 
        kind: kind.kindCd, upr_cd: sido.orgCd, 
        org_cd: sigungu.orgCd, care_reg_no: shelter.careRegNo, 
        pageNo: pageNo, numOfRows: 8})
        .then(res => dispatch({type: 'SET', name: 'animalList', value: res}))
    }, [sido, sigungu, upkind, shelter, kind, pageNo]);

    const onChange = ({name, value}) => {
        dispatch({type: 'SET', name, value});
    }

    return (
        <div className="btn-group" style={{margin: "5px 10px"}}>
            <DropDownMenu name="시도" engName='sido' list={sidoList} onChangeParent={onChange}></DropDownMenu>
            <DropDownMenu name="시군구" engName='sigungu' list={sigunguList} onChangeParent={onChange}></DropDownMenu>
            <DropDownMenu name="보호소" engName='shelter' list={shelterList} onChangeParent={onChange}></DropDownMenu>
            <DropDownMenu name="동물" engName='upkind' list={upkindList} onChangeParent={onChange}></DropDownMenu>
            <DropDownMenu name="종류" engName='kind' list={kindList} onChangeParent={onChange}></DropDownMenu> 
        </div>
    )
}

export default DropDownBar;