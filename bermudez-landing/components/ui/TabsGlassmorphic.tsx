'use client'

import { useState, ReactNode } from 'react'

export interface Tab {
  id: string
  label: string
  content: ReactNode
}

interface TabsGlassmorphicProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export default function TabsGlassmorphic({
  tabs,
  defaultTab,
  className = '',
}: TabsGlassmorphicProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || '')

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content

  return (
    <div className={className}>
      {/* Tab Headers */}
      <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide">
        {tabs.map(tab => {
          const isActive = tab.id === activeTab

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative px-6 py-4 font-display text-lg uppercase tracking-wide
                transition-all duration-300 whitespace-nowrap
                rounded-[7px]
                ${
                  isActive
                    ? 'glass ghost-border text-primary shadow-[0_4px_20px_rgba(233,193,118,0.15)]'
                    : 'text-on-surface/50 hover:text-on-surface/80 hover:shadow-[0_2px_15px_rgba(255,255,255,0.05)]'
                }
                ${isActive ? 'border-t-2 border-t-primary' : ''}
              `}
              aria-selected={isActive}
              role="tab"
            >
              {tab.label}

              {/* Active indicator - Gold underline */}
              {isActive && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 gradient-gold"
                  aria-hidden="true"
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Tab Content with fade transition */}
      <div
        key={activeTab}
        className="animate-fadeIn"
        role="tabpanel"
      >
        {activeTabContent}
      </div>
    </div>
  )
}
