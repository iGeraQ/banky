import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Mail, Building, MapPin, Phone, Save } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    company: 'Accounting Solutions MX',
    phone: '+52 55 1234 5678',
    address: 'Av. Reforma 123, CDMX',
    role: 'Senior Accountant',
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    // In production, this would update the user profile via API
  };

  return (
    <div className="flex-1 space-y-6 p-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Profile Settings</h2>
        <p className="text-muted-foreground">
          Manage your account information and preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Summary Card */}
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center space-y-4">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-12 w-12 text-primary" />
              </div>
              <div className="text-center">
                <CardTitle>{formData.name}</CardTitle>
                <CardDescription>{formData.role}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">{formData.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">{formData.company}</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">{formData.phone}</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="space-y-2">
                <p className="text-sm font-medium">Account Status</p>
                <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                  Active - Professional Plan
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Form */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal details and contact information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Your Role"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+52 55 1234 5678"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Address
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address, City, State"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="button" onClick={handleSave} disabled={isSaving}>
                  <Save className="mr-2 h-4 w-4" />
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Additional Settings Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>
              Manage how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates via email
                </p>
              </div>
              <Button variant="outline" size="sm">
                Enabled
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Processing Complete</Label>
                <p className="text-sm text-muted-foreground">
                  Notify when statements are processed
                </p>
              </div>
              <Button variant="outline" size="sm">
                Enabled
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>
              Manage your account security
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Change Password</Label>
              <Button variant="outline" className="w-full">
                Update Password
              </Button>
            </div>
            <div className="space-y-2">
              <Label>Two-Factor Authentication</Label>
              <Button variant="outline" className="w-full">
                Enable 2FA
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
