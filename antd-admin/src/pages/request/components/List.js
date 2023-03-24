import React, { PureComponent } from 'react'
import {
  Table,
  Dropdown,
  Button,
  Label,
  Modal,
  Input,
  Card,
  Select,
  Option,
} from 'antd'
import { t } from '@lingui/macro'
import { Ellipsis } from 'components'
import styles from './List.less'
import {
  DownOutlined,
  RestOutlined,
  UnorderedListOutlined,
  PlusOutlined,
  SmileOutlined,
} from '@ant-design/icons'
const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
  },
]

export function DorpCom({ title }) {
  return (
    <Dropdown.Button
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow={true}
      icon={<DownOutlined />}
      style={{ width: '200px', marginRight: '10px' }}
    >
      <a onClick={(e) => e.preventDefault()}>{title}</a>
    </Dropdown.Button>
  )
}
class List extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }
  renderTitle = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <DorpCom title={'机型——构型 AB-L'} />
        <DorpCom title={'专业——飞控'} />
        <DorpCom title={'子系统——主飞控'} />
        <DorpCom title={'类型——正式'} />
      </div>
    )
  }
  showModal = () => {
    this.setState({ modalVisible: true })
  }

  render() {
    const { ...tableProps } = this.props
    const columns = [
      {
        title: t`测试路线`,
        dataIndex: 'title',
        align: 'center',
        render: (text) => 123,
      },
      {
        title: t`架次有效性`,
        dataIndex: 'title',
        align: 'center',
        render: (text) => 123,
      },

      {
        title: t`注入音屏`,
        dataIndex: 'categories',
        align: 'center',
        render: (text) => 123,
      },
      {
        title: t`审签状态`,
        dataIndex: 'comments',
        align: 'center',
        render: (text) => 123,
      },
      {
        title: t`操作`,
        dataIndex: 'author',
        align: 'center',
        render: (text) => (
          <div style={{ color: 'red' }}>
            <Button type="link">详情</Button>
            <Button type="link" onClick={this.showModal}>
              修改
            </Button>
            <Button type="link"> 删除</Button>
            <Button type="link">提交</Button>
          </div>
        ),
      },
    ]

    return (
      <>
        <Table
          {...tableProps}
          pagination={{
            ...tableProps.pagination,
            showTotal: (total) => t`Total ${total} Items`,
          }}
          bordered
          scroll={{ x: 1200 }}
          className={styles.table}
          columns={[
            {
              title: this.renderTitle,
              children: columns,
              align: 'left',
            },
          ]}
          simple
          rowKey={(record) => record.id}
        />
        <Modal
          className="modal"
          title="修改"
          open={this.state.modalVisible}
          onOk={() => this.setState({ modalVisible: false })}
          onCancel={() => this.setState({ modalVisible: false })}
        >
          <Card>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '200px',
              }}
            >
              <div>
                <p style={{ marginBottom: '5px' }}>
                  <span style={{ color: 'red' }}> * </span>
                  测试路线
                </p>
                <Select defaultValue="123" style={{ width: 400 }}>
                  <Option value="123">123</Option>
                </Select>
              </div>
              <div>
                <p style={{ marginBottom: '5px' }}>
                  <span style={{ color: 'red' }}> * </span>
                  架次有效性
                </p>
                <Input value={123} className="input" style={{ width: 400 }} />
              </div>
              <div>
                <p style={{ marginBottom: '5px' }}>
                  <span style={{ color: 'red' }}> * </span>
                  音频选择
                </p>
                <Select defaultValue="123" style={{ width: 400 }}>
                  <Option value="123">123</Option>
                </Select>
              </div>
            </div>
          </Card>
        </Modal>
      </>
    )
  }
}

export default List
