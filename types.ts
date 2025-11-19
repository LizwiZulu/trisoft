export enum ServiceType {
  CUSTOM_DEV = 'Custom Development',
  MOBILE_APPS = 'Mobile Applications',
  WEB_APPS = 'Web Applications',
  CLOUD = 'Cloud Solutions',
  CONSULTING = 'Tech Consulting',
  INTEGRATION = 'System Integration'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: ServiceType;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}