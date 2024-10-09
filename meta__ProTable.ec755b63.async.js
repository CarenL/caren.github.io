"use strict";(self.webpackChunktmuyun_react=self.webpackChunktmuyun_react||[]).push([[726],{22272:function(L,c,n){var S;n.r(c),n.d(c,{demos:function(){return A}});var e=n(17061),v=n.n(e),U=n(27424),y=n.n(U),m=n(17156),j=n.n(m),d=n(67294),$=n(52717),T=n(74400),A={"protable-demo-0":{component:d.memo(d.lazy(j()(v()().mark(function F(){var p,h,u,E,I,l,b,s,M,P;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return p=a.sent,h=p.useEffect,u=p.useState,a.next=7,Promise.resolve().then(n.bind(n,74400));case 7:for(E=a.sent,I=E.ProTable,l=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u90E8\u95E8",dataIndex:"depart"},{title:"\u804C\u52A1",dataIndex:"aaa"}],b=[],s=0,M=18;s<M;s++)b.push({id:s,name:"\u59D3\u540D".concat(s),age:"\u5E74\u9F84".concat(s),address:"\u676D\u5DDE\u5E02\u897F\u6E56\u533A".concat(s),depart:"\u90E8\u95E8\u90E8\u95E8".concat(s),aaa:"\u804C\u52A1".concat(s)});return P=function(){var g=u([]),i=y()(g,2),f=i[0],B=i[1],R=u([]),O=y()(R,2),K=O[0],r=O[1],C=u(l),x=y()(C,1),W=x[0],Z=u(b),z=y()(Z,1),N=z[0];h(function(){B([{formItem:{label:"\u59D3\u540D",name:"name"},type:"input",form:{placeholder:"\u884C\u8F93\u5165\u59D3\u540D"}},{formItem:{label:"\u59D3\u540D",name:"name1"},type:"input",form:{placeholder:"\u884C\u8F93\u5165\u59D3\u540D"}},{formItem:{label:"\u59D3\u540D",name:"name2"},type:"input",form:{placeholder:"\u884C\u8F93\u5165\u59D3\u540D"}},{formItem:{label:"\u5DE5\u4F5C\u5355\u4F4D",name:"depart"},type:"select",form:{placeholder:"\u8BF7\u9009\u62E9",options:[{label:"\u676D\u5DDE",value:"hangzhou"},{label:"\u5B81\u6CE2",value:"ningbo"}]}}]),r([{text:"\u5BFC\u51FA",type:"primary",onClick:V},{text:"\u5BFC\u5165",type:"primary",danger:!0,onClick:G}])},[]);var V=function(){console.log("\u5BFC\u51FA")},G=function(){console.log("\u5BFC\u5165")},J=function(D){console.log(D)},Q=function(D,H){console.log("page",D),console.log("pageSize",H)};return d.createElement(d.Fragment,null,d.createElement(I,{searchFileds:f,toolsBar:K,onSearch:J,tableConfig:{columns:W,dataSource:N,rowKey:"id",pagination:{total:80,showSizeChanger:!0,showQuickJumper:!0,showTotal:function(D){return"\u603B".concat(D,"\u9875")},onChange:Q}}}))},a.abrupt("return",{default:P});case 14:case"end":return a.stop()}},F)})))),asset:{type:"BLOCK",id:"protable-demo-0",refAtomIds:["ProTable"],dependencies:{"index.tsx":{type:"FILE",value:`import { FC, useEffect, useState } from 'react';
import type { TableProps } from 'antd';
import { ProTable } from 'tmuyun-react';
import type { FieldProps, ToolsBarButtonGroups } from 'tmuyun-react';

const tableColumns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
  },
  {
    title: '\u5730\u5740',
    dataIndex: 'address',
  },
  {
    title: '\u90E8\u95E8',
    dataIndex: 'depart',
  },
  {
    title: '\u804C\u52A1',
    dataIndex: 'aaa',
  },
];

const data: any = [];
for (let i = 0, len = 18; i < len; i++) {
  data.push({
    id: i,
    name: \`\u59D3\u540D\${i}\`,
    age: \`\u5E74\u9F84\${i}\`,
    address: \`\u676D\u5DDE\u5E02\u897F\u6E56\u533A\${i}\`,
    depart: \`\u90E8\u95E8\u90E8\u95E8\${i}\`,
    aaa: \`\u804C\u52A1\${i}\`,
  });
}

const ExamplePage: FC = () => {
  const [searchFiledConf, setSearchFiledConf] = useState<FieldProps[]>([]);
  const [toolsBar, setToolsBar] = useState<ToolsBarButtonGroups>([]);
  const [columns] = useState<TableProps['columns']>(tableColumns);
  const [tableData] = useState(data);

  useEffect(() => {
    setSearchFiledConf([
      {
        formItem: {
          label: '\u59D3\u540D',
          name: 'name',
        },
        type: 'input',
        form: {
          placeholder: '\u884C\u8F93\u5165\u59D3\u540D',
        },
      },
      {
        formItem: {
          label: '\u59D3\u540D',
          name: 'name1',
        },
        type: 'input',
        form: {
          placeholder: '\u884C\u8F93\u5165\u59D3\u540D',
        },
      },
      {
        formItem: {
          label: '\u59D3\u540D',
          name: 'name2',
        },
        type: 'input',
        form: {
          placeholder: '\u884C\u8F93\u5165\u59D3\u540D',
        },
      },
      {
        formItem: {
          label: '\u5DE5\u4F5C\u5355\u4F4D',
          name: 'depart',
        },
        type: 'select',
        form: {
          placeholder: '\u8BF7\u9009\u62E9',
          options: [
            {
              label: '\u676D\u5DDE',
              value: 'hangzhou',
            },
            {
              label: '\u5B81\u6CE2',
              value: 'ningbo',
            },
          ],
        },
      },
    ]);

    setToolsBar([
      {
        text: '\u5BFC\u51FA',
        type: 'primary',
        onClick: onExport,
      },
      {
        text: '\u5BFC\u5165',
        type: 'primary',
        danger: true,
        onClick: onImport,
      },
    ]);
  }, []);

  const onExport = () => {
    console.log('\u5BFC\u51FA');
  };

  const onImport = () => {
    console.log('\u5BFC\u5165');
  };

  const onSearch = (values: any) => {
    console.log(values);
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log('page', page);
    console.log('pageSize', pageSize);
  };

  return (
    <>
      <ProTable
        searchFileds={searchFiledConf}
        toolsBar={toolsBar}
        onSearch={onSearch}
        tableConfig={{
          columns,
          dataSource: tableData,
          rowKey: 'id',
          pagination: {
            total: 80,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => \`\u603B\${total}\u9875\`,
            onChange: onPaginationChange,
          },
        }}
      />
    </>
  );
};

export default ExamplePage;`},react:{type:"NPM",value:"18.3.1"},"tmuyun-react":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:S||(S=n.t(d,2)),"tmuyun-react":T},renderOpts:{compile:function(){var F=j()(v()().mark(function h(){var u,E=arguments;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(335).then(n.bind(n,37335));case 2:return l.abrupt("return",(u=l.sent).default.apply(u,E));case 3:case"end":return l.stop()}},h)}));function p(){return F.apply(this,arguments)}return p}()}}}},74400:function(L,c,n){n.r(c),n.d(c,{Foo:function(){return U},ProTable:function(){return M}});var S=n(67294),e=n(85893),v=function(t){return(0,e.jsx)("h4",{children:t.title})},U=v,y=n(42122),m=n.n(y),j=n(29651),d=n(27424),$=n.n(d),T=n(947),A=n(55999),F=n(42500),p=n(78957),h=n(36514),u={labelCol:{span:8},wrapperCol:{span:16},style:{width:"300px",marginBottom:"24px"}},E=function(t){var a=t.fields,o=t.onSearch,g=T.Z.useForm(),i=$()(g,1),f=i[0],B=function(C,x){switch(C){case"input":return(0,e.jsx)(A.Z,m()({},x));case"select":return(0,e.jsx)(F.Z,m()({},x));default:return(0,e.jsx)(e.Fragment,{})}},R=function(C,x){console.log(x)},O=function(){var C=f.getFieldsValue();o==null||o(C)},K=function(){f.resetFields(),o==null||o({})};return(0,e.jsx)("div",{className:"compoent-ProTable-SearchForm",children:(0,e.jsxs)(T.Z,{form:f,layout:"inline",onValuesChange:R,children:[a==null?void 0:a.map(function(r){return(0,S.createElement)(T.Z.Item,m()(m()({},u),{},{style:{marginBottom:"24px",width:r.formItem.label?"300px":"200px"},wrapperCol:{span:r.formItem.label?16:24},key:r.formItem.name},r.formItem),B(r.type,r.form))}),(0,e.jsx)("div",{className:"button-groups",children:(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(h.ZP,{type:"primary",onClick:O,children:"\u67E5\u8BE2"}),(0,e.jsx)(h.ZP,{onClick:K,children:"\u91CD\u7F6E"})]})})]})})},I=E,l=function(t){var a=t.toolsBar,o=t.toolsBarShow,g=o===void 0?!0:o,i=t.render;return g?(0,e.jsx)("div",{className:"component-ProTableToolsBar-groups",children:i?i():(0,e.jsx)(p.Z,{children:a.map(function(f,B){return(0,e.jsx)(h.ZP,m()(m()({},f),{},{children:f.text}),B)})})}):(0,e.jsx)(e.Fragment,{})},b=l,s=function(t){var a=t.searchFileds,o=t.onSearch,g=t.toolsBar,i=t.tableConfig;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(I,{fields:a,onSearch:o}),(0,e.jsx)(b,{toolsBar:g}),(0,e.jsx)(j.Z,m()({},i))]})},M=s},77726:function(L,c,n){n.r(c),n.d(c,{texts:function(){return e}});var S=n(52717);const e=[{value:"\u5217\u8868\u7EC4\u4EF6",paraId:0,tocIndex:0}]}}]);
