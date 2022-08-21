import React from 'react'
import Tabs from './tabs'
import TabItem, { TabItemProps } from './tabItem'

export type ITabsComponent = typeof Tabs & {
  Item: React.FC<TabItemProps>
}
const TransTabs = Tabs as ITabsComponent
TransTabs.Item = TabItem

export default TransTabs