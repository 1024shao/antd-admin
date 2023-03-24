import { Component } from 'react'
import { Editor, Page } from 'components'
import { convertToRaw } from 'draft-js'
import { Row, Table, Button, Space, Switch } from 'antd'
import draftToHtml from 'draftjs-to-html'
import draftToMarkdown from 'draftjs-to-markdown'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

export default class EditorPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorContent: null,
    }
  }

  onEditorStateChange = (editorContent) => {
    this.setState({
      editorContent,
    })
  }

  render() {
    const dataSource = [
      {
        key: '1',
        name: '超级管理员',
        username: 32,
        userState: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '区域管理员',
        username: 42,
        userState: '西湖区湖底公园1号',
      },
      {
        key: '3',
        name: '区域管理员',
        username: 42,
        userState: '西湖区湖底公园1号',
      },
      {
        key: '4',
        name: '区域管理员',
        username: 42,
        userState: '西湖区湖底公园1号',
      },
      {
        key: '5',
        name: '区域管理员',
        username: 42,
        userState: '西湖区湖底公园1号',
      },
      {
        key: '6',
        name: '区域管理员',
        username: 42,
        userState: '西湖区湖底公园1号',
      },
    ]

    const columns = [
      {
        title: '角色名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: '用户状态',
        dataIndex: 'userState',
        key: 'userState',
        render: (key, item) => {
          return <Switch defaultChecked disabled={item.key === '1'} />
        },
      },
      {
        title: '操作',
        key: 'name',
        render: (key, item) => {
          return (
            <Space style={{ display: 'flex' }}>
              <Button
                type="primary"
                danger
                shape="circle"
                disabled={item.key === '1'}
                icon={<DeleteOutlined />}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<EditOutlined />}
              ></Button>
            </Space>
          )
        },
      },
    ]

    return (
      <Page inner>
        <Row gutter={32}>
          {/* <Table /> */}
          <Table
            dataSource={dataSource}
            columns={columns}
            style={{ width: '100%' }}
          />
          ;
        </Row>
      </Page>
    )
  }
}
