import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'umi'
import { Tabs } from 'antd'
import { history } from 'umi'
import { stringify } from 'qs'
import { t } from "@lingui/macro"
import { Page } from 'components'
import List from './components/List'
import './index.less'

const { TabPane } = Tabs

const EnumPostStatus = {
  UNPUBLISH: 1,
  PUBLISHED: 2,
}

@connect(({ request, loading }) => ({ request, loading }))
class RequestPage extends PureComponent {
  handleTabClick = key => {
    const { pathname } = this.props.location

    history.push({
      pathname,
      search: stringify({
        status: key,
      }),
    })
  }

  get listProps() {
    const { request = {}, loading, location } = this.props
    console.log('this.props: ', this.props);
    const { list, pagination } = request
    const { query, pathname } = location

    return {
      pagination,
      dataSource: list,
      loading: loading.effects['post/query'],
      onChange(page) {
        history.push({
          pathname,
          search: stringify({
            ...query,
            page: page.current,
            pageSize: page.pageSize,
          }),
        })
      },
    }
  }

  render() {
    const { location } = this.props
    const { query } = location

    return (
      <Page inner>
        <List {...this.listProps} />
      </Page>
    )
  }
}

RequestPage.propTypes = {
  post: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default RequestPage
