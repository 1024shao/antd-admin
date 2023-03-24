import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import CountUp from 'react-countup'
import { DownOutlined } from '@ant-design/icons';
import iconMap from 'utils/iconMap'
import { Dropdown, Space } from 'antd';
import styles from './numberCard.less'


function NumberCard({ icon, color, title, number, countUp, showDropDown }) {

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ];
  return (
    <Card
      className={styles.numberCard}
      bordered={false}
      bodyStyle={{ padding: 10 }}
    >
      <div className={styles.content}>
        <p className={styles.title}>
          {showDropDown ? <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {title || 'No Title'}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown> : title}
        </p>
        <p className={styles.number}>
          <CountUp
            start={0}
            end={number}
            duration={2.75}
            useEasing
            useGrouping
            separator=","
            {...(countUp || {})}
          />
        </p>
      </div>
    </Card>
  )
}

NumberCard.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
  countUp: PropTypes.object,
}

export default NumberCard
