import React from 'react';
import { Home, CreditCard, PieChart, TrendingUp } from 'lucide-react';
type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
};
export function BottomNavigation() {
  const navItems: NavItem[] = [{
    id: 'home',
    label: 'Home',
    icon: <Home size={20} />,
    isActive: true
  }, {
    id: 'accounts',
    label: 'Accounts',
    icon: <CreditCard size={20} />,
    isActive: false
  }, {
    id: 'planning',
    label: 'Planning',
    icon: <PieChart size={20} />,
    isActive: false
  }, {
    id: 'forecast',
    label: 'Forecast',
    icon: <TrendingUp size={20} />,
    isActive: false
  }];
  return <div className="bg-white border-t border-gray-200 flex justify-between px-2 py-1">
      {navItems.map(item => <button key={item.id} className={`flex flex-col items-center justify-center py-2 px-3 ${item.isActive ? 'text-blue-500' : 'text-gray-500 hover:text-gray-700'}`}>
          <div className="mb-1">{item.icon}</div>
          <span className="text-xs font-medium">{item.label}</span>
        </button>)}
    </div>;
}