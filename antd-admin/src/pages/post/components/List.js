import React, { PureComponent } from 'react'
import { Table, Avatar, Button } from 'antd'
import { t } from "@lingui/macro"
import { Ellipsis } from 'components'
import styles from './List.less'
import { ReloadOutlined, RestOutlined, UnorderedListOutlined, PlusOutlined } from '@ant-design/icons'


export function RefreshCom() {
  return <Button type="link"><ReloadOutlined />刷新</Button>
}
export function RetrieveCom() {
  return <Button type="link"><UnorderedListOutlined />检索</Button>
}
export function DeleteCom() {
  return <Button type="link" disabled><RestOutlined />删除</Button>
}
export function CreateCom() {
  return <Button type="link" color='black'><PlusOutlined />创建</Button>
}
class List extends PureComponent {
  renderTitle = () => {
    return <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
      <RefreshCom />
      <RetrieveCom />
      <DeleteCom />
      <CreateCom />
    </div>
  }

  render() {
    const { ...tableProps } = this.props
    const columns = [
      {
        title: t`操作`,
        dataIndex: 'title',
        align: 'center',
        render: text => (
          <div>
            <Button type='link'>详情</Button>
            <Button type='link'>启用</Button>
          </div>
        ),
      },
      {
        title: t`配置`,
        dataIndex: 'author',
        align: 'center',
        render: text => (
          <div>
            <Button type='link'>修改</Button>
            <Button type='link'>解绑</Button>
          </div>
        ),
      },
      {
        title: t`设备类型`,
        dataIndex: 'categories',
        align: 'center',
      },
      {
        title: t`设备序号`,
        dataIndex: 'tags',
        align: 'center',
      },
      {
        title: t`设备描述`,
        dataIndex: 'visibility',
        align: 'center',
      },
      {
        title: t`设备状态`,
        dataIndex: 'comments',
        align: 'center',
      },
      {
        title: t`有效截止日期`,
        dataIndex: 'date',
        align: 'center',
      },
    ]


    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => t`Total ${total} Items`,
        }}
        bordered
        scroll={{ x: 1200 }}
        className={styles.table}
        columns={[{
          title: this.renderTitle, children: columns, align: 'left'
        }]}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

export default List
