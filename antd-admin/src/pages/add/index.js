import { Component } from 'react'
import { Editor, Page } from 'components'
import { Row, Card, Button, Space, Col, Select } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  AlignLeftOutlined,
} from '@ant-design/icons'
import './index.less'
import ImgUrl from '../../img.webp'

const handleChange = (value) => {
  console.log(`selected ${value}`)
}

export default class Add extends Component {
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
    return (
      <Page inner>
        <Space
          wrap
          style={{ display: 'flex', alignItems: 'center' }}
          align="end"
        >
          <AlignLeftOutlined />
          <Select
            defaultValue="架次 A8-L-01"
            style={{
              width: 220,
            }}
            onChange={handleChange}
            options={[
              {
                value: '架次 A8-L-01',
                label: '架次 A8-L-01',
                disabled: true,
              },
            ]}
          />
          <Select
            defaultValue="计划名称 2-主飞控制"
            style={{
              width: 220,
            }}
            onChange={handleChange}
            options={[
              {
                value: '计划名称 2-主飞控制',
                label: '计划名称 2-主飞控制',
                disabled: true,
              },
            ]}
          />
          <Button type="primary">计划已经开工</Button>
        </Space>
        <Space direction="vertical" size="middle" style={{ marginTop: '50px' }}>
          <div className="flex-line">
            <label>步骤</label>
            <p>8</p>
          </div>
          <div className="flex-line">
            <label>步骤</label>
            <p>绘制主副驾驶盘唯一操作力曲线图</p>
          </div>
          <div className="flex-line">
            <label>执行状态</label>
            <p style={{ color: '#1777ff' }}>操作完成</p>
            <Button style={{ marginLeft: '200px' }} type="primary">
              操作完成
            </Button>
          </div>
          <div className="flex-line">
            <label>设备指令</label>
            <p>指令1 FTI：绘制主驾驶角位移-操作力</p>
          </div>
        </Space>
        <Row gutter={24} justify="space-between">
          <Col span={11}>
            <Card bordered={false}>
              <h2>注入音频</h2>
              <div>
                <img src={ImgUrl} alt="" />
              </div>
            </Card>
          </Col>
          <Col span={11}>
            <Card bordered={false}>
              <h2>输出音频</h2>
              <div>
                <img src={ImgUrl} alt="" />
              </div>
            </Card>
          </Col>
        </Row>
      </Page>
    )
  }
}
