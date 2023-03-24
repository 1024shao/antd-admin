import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Button } from 'antd'
import { DropOption } from 'components'
import { t } from '@lingui/macro'
import { Trans } from '@lingui/macro'
import { Link } from 'umi'
import styles from './List.less'

const { confirm } = Modal

class List extends PureComponent {
  handleMenuClick = (record, e) => {
    const { onDeleteItem, onEditItem } = this.props

    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: t`Are you sure delete this record?`,
        onOk() {
          onDeleteItem(record.id)
        },
      })
    }
  }

  render() {
    const { onDeleteItem, onEditItem, ...tableProps } = this.props

    const columns = [
      {
        title: <Trans>子系统</Trans>,
        dataIndex: 'avatar',
        key: 'avatar',
        width: '10%',
        fixed: 'left',
        render: (text) => 123,
      },
      {
        title: <Trans>测试路线</Trans>,
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => 123,
      },
      {
        title: <Trans>架次有效性</Trans>,
        dataIndex: 'nickName',
        key: 'nickName',
      },
      {
        title: <Trans>审签状态</Trans>,
        dataIndex: 'age',
        width: '6%',
        key: 'age',
      },
      {
        title: <Trans>操作</Trans>,
        dataIndex: 'title',
        align: 'center',
        render: (text) => (
          <div>
            <Button type="link">详情</Button>
            <Button type="link">审签</Button>
          </div>
        ),
      },
    ].map((item) => ({ ...item, align: 'center' }))

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: (total) => t`Total ${total} Items`,
        }}
        className={styles.table}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
      />
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
