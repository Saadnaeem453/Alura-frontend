import { 
  Users, 
  Phone, 
  BarChart3, 
  Settings, 
  MessageSquare, 
  Shield 
} from 'lucide-react';

export const features = [
  {
    id: 1,
    icon: Users,
    title: 'Agent Management',
    description: 'Create, customize, and manage your call agents with ease. Assign roles, monitor performance, and optimize workloads.'
  },
  {
    id: 2,
    icon: Phone,
    title: 'Twilio Integration',
    description: 'Purchase and manage Twilio numbers directly through our platform. Set up phone numbers in just a few clicks.'
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get detailed insights into your call center performance with real-time analytics and customizable reports.'
  },
  {
    id: 4,
    icon: Settings,
    title: 'Customizable Workflows',
    description: 'Create automated call flows that route calls efficiently. Design your own call scripts and response trees.'
  },
  {
    id: 5,
    icon: MessageSquare,
    title: 'VAPI Voice Integration',
    description: 'Leverage VAPI\'s powerful voice technology for clear, reliable calls with minimal latency and excellent audio quality.'
  },
  {
    id: 6,
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Keep your calls and data secure with enterprise-grade encryption, role-based access control, and compliance features.'
  }
];
