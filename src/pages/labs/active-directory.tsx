import LabHeader from '../../components/Labs/LabHeader';
import LabInfo from '../../components/Labs/LabInfo';
import LabStep from '../../components/Labs/LabStep';
import LabConclusion from '../../components/Labs/LabConclusion';

import image1 from '../../images/labs/active-directory/1.jpg';
import image2 from '../../images/labs/active-directory/2.jpg';
import image3 from '../../images/labs/active-directory/3.jpg';
import image4 from '../../images/labs/active-directory/4.jpg';
import image5 from '../../images/labs/active-directory/5.jpg';
import image6 from '../../images/labs/active-directory/6.jpg';
import image7 from '../../images/labs/active-directory/7.jpg';
import image8 from '../../images/labs/active-directory/8.jpg';
import image9 from '../../images/labs/active-directory/9.jpg';
import image10 from '../../images/labs/active-directory/10.jpg';
import image11 from '../../images/labs/active-directory/11.jpg';
import image12 from '../../images/labs/active-directory/12.jpg';
import image13 from '../../images/labs/active-directory/13.jpg';
import image14 from '../../images/labs/active-directory/14.jpg';
import image15 from '../../images/labs/active-directory/15.jpg';
import image16 from '../../images/labs/active-directory/16.jpg';
import image17 from '../../images/labs/active-directory/17.jpg';
import image18 from '../../images/labs/active-directory/18.jpg';


export default function ActiveDirectoryLab() {
  return (
    <main className="min-h-screen bg-neutral-900 px-6 py-16 text-white">

      <div className="mx-auto max-w-5xl">

        <LabHeader
          title="Windows Active Directory Home Lab"
          overview="Built a Windows Server Active Directory environment using Oracle VirtualBox to simulate a corporate Windows domain. The lab demonstrates Active Directory Domain Services (AD DS), DNS configuration, Organizational Units (OUs), user and group management, domain-joined clients, and Group Policy administration."
        />

        <LabInfo>
          <table className="w-full">
            <tbody>

              <tr className="border-b border-neutral-700">
                <td className="p-4 font-semibold">Host OS</td>
                <td className="p-4">macOS</td>
              </tr>

              <tr className="border-b border-neutral-700">
                <td className="p-4 font-semibold">Hypervisor</td>
                <td className="p-4">Oracle VirtualBox</td>
              </tr>

              <tr className="border-b border-neutral-700">
                <td className="p-4 font-semibold">Server OS</td>
                <td className="p-4">Windows Server 2016 Standard Evaluation</td>
              </tr>

              <tr className="border-b border-neutral-700">
                <td className="p-4 font-semibold">Client OS</td>
                <td className="p-4">Windows 10</td>
              </tr>

              <tr className="border-b border-neutral-700">
                <td className="p-4 font-semibold">Server Role</td>
                <td className="p-4">Active Directory Domain Services (AD DS)</td>
              </tr>

              <tr className="border-b border-neutral-700">
                <td className="p-4 font-semibold">Additional Services</td>
                <td className="p-4">DNS Server</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold">Management Tools</td>
                <td className="p-4">
                  Server Manager, Active Directory Users and Computers,
                  Group Policy Management
                </td>
              </tr>

            </tbody>
          </table>
        </LabInfo>

        <LabStep
          title="Prepare Windows Server Environment"
          image={image14}
          description="Prepared the Windows Server 2016 virtual machine by verifying the operating system installation and validating the system configuration before deploying Active Directory Domain Services (AD DS). For documentation purposes, the server is referred to as DC-01 (even though I named it as DC-07; I corrected it later) to align with the common enterprise naming convention for a primary Domain Controller."
          configuration={[
            'Operating System: Windows Server 2016 Standard Evaluation',
            'Computer Name: DC-07 but should be given DC-01',
            'Environment: Oracle VirtualBox',
            'Role: Domain Controller (Planned)',
          ]}
        />
        <LabStep
        title="Verify Domain Administrator Login"
        image={image2}
        description="Verified that Active Directory Domain Services (AD DS) was successfully configured by confirming the presence of the domain administrator account on the Windows Server login screen. The server now authenticates against the newly created Active Directory domain, indicating that the Domain Controller is functioning correctly."
        configuration={[
          'Domain: SIVATEJALAB',
          'Account: Administrator',
          'Authentication: Active Directory Domain Services (AD DS)',
          'Role: Domain Controller',
          'Status: Domain administrator login available',
        ]}
       />
       <LabStep
       title="Launch Server Manager"
       image={image11}
       description="Opened Server Manager, the primary management console in Windows Server, to begin configuring server roles and features. Server Manager provides centralized administration for installing roles, managing services, monitoring server health, and performing post-deployment configuration tasks. It serves as the starting point for deploying Active Directory Domain Services (AD DS)."
       configuration={[
         'Management Console: Server Manager',
         'Server Status: Local Server Online',
         'Deployment Method: Add Roles and Features Wizard',
         'Purpose: Install Active Directory Domain Services (AD DS)',
         'Environment: Windows Server 2016',
       ]}
       />
      
       <LabStep
       title="Confirm Active Directory Installation"
       image={image1}
       description="Verified the successful installation of Active Directory Domain Services (AD DS) by confirming the availability of the Active Directory management tools within Windows Administrative Tools. The presence of these consoles indicates that the server has been successfully promoted to a Domain Controller and is ready for Active Directory administration."
       configuration={[
         'Role Installed: Active Directory Domain Services (AD DS)',
         'Management Console: Active Directory Users and Computers',
         'Management Console: Active Directory Domains and Trusts',
         'Management Console: Active Directory Sites and Services',
         'Management Console: Active Directory Administrative Center',
         'Status: Domain Controller successfully configured',
       ]}
     />
     <LabStep
     title="Validate Network Connectivity and DNS Resolution"
     image={image3}
     description="Performed post-deployment network validation using the Windows Command Prompt. Verified the TCP/IP stack by successfully pinging the loopback address (127.0.0.1) and confirmed DNS name resolution using the nslookup command. These checks help ensure that the Domain Controller's networking and DNS services are functioning correctly after Active Directory deployment."
     configuration={[
       'Command Executed: ping 127.0.0.1',
       'Result: Loopback connectivity successful',
       'Command Executed: nslookup sivatejalab.com',
       'Verified DNS name resolution',
       'Tool Used: Windows Command Prompt',
     ]}
     />
     <LabStep
     title="Review Default Active Directory Objects"
     image={image13}
     description="Opened the Active Directory Users and Computers (ADUC) management console to verify the successful creation of the Active Directory domain. The default Organizational Units (OUs), built-in user accounts, security groups, and administrative containers were present, confirming that Active Directory was functioning correctly and ready for further administration."
     configuration={[
       'Tool: Active Directory Users and Computers (ADUC)',
       'Domain: sivatejalab.com',
       'Verified default Organizational Units (OUs)',
       'Verified built-in user accounts',
       'Verified default security groups',
       'Status: Active Directory operational',
     ]}
     />
     <LabStep
     title="Create Organizational Units (OUs)"
     image={image9}
     description="Created a structured Organizational Unit (OU) hierarchy within Active Directory to logically organize users, computers, and administrative resources. Department-based OUs were created to reflect a typical enterprise environment, enabling simplified administration, delegation of control, and future Group Policy deployment."
     configuration={[
       'Tool: Active Directory Users and Computers (ADUC)',
       'Parent OU: Sivateja Company',
       'Child OUs: HR, Finance, IT, Sales',
       'Purpose: Organize Active Directory objects',
       'Supports Group Policy and delegated administration',
     ]}
     />
     <LabStep
     title="Create Domain User Account"
     image={image12}
     description="Created a new Active Directory user account within the HR Organizational Unit (OU) using the Active Directory Users and Computers (ADUC) console. User attributes such as first name, last name, display name, and logon name (User Principal Name and pre-Windows 2000 logon name) were configured following standard enterprise identity management practices."
     configuration={[
       'Created user in HR Organizational Unit',
       'Configured First Name and Last Name',
       'Assigned Display Name',
       'Configured User Principal Name (UPN)',
       'Configured pre-Windows 2000 Logon Name (SAM Account Name)',
     ]}
     />

     <LabStep
     title="Create a Domain User Account"
     image={image17}
     description="Created a new Active Directory user account within the Human Resources (HR) Organizational Unit using the Active Directory Users and Computers (ADUC) console. During account creation, an initial password was assigned and the 'User must change password at next logon' option was enabled to enforce secure password management and align with standard enterprise security practices."
     configuration={[
       'Tool: Active Directory Users and Computers (ADUC)',
       'Target OU: HR',
       'Object Type: User',
       'Initial Password Assigned',
       'Password Policy: User must change password at next logon',
       'Purpose: Provision a new domain user account',
     ]}
     />
     <LabStep
     title="Verify User Account Provisioning"
     image={image18}
     description="Verified that newly created user accounts were successfully provisioned within the appropriate Organizational Unit (OU) in Active Directory. The accounts were organized according to the enterprise OU structure, demonstrating proper user management practices and confirming that user provisioning was completed successfully."
     configuration={[
       'Tool: Active Directory Users and Computers (ADUC)',
       'Target OU: IT',
       'Verified multiple domain user accounts',
       'User accounts organized by department',
       'Status: User provisioning successful',
     ]}
     />
     <LabStep
     title="Reset User Password"
     image={image15}
     description="Performed a password reset for an existing Active Directory user account using the Active Directory Users and Computers (ADUC) console. The administrator assigned a new temporary password and enforced the 'User must change password at next logon' policy to maintain account security and comply with standard enterprise password management practices."
     configuration={[
       'Selected existing domain user',
       'Assigned temporary password',
       'Enabled "User must change password at next logon"',
       'Performed administrative password reset',
       'Applied Active Directory password policy',
     ]}
     />

     <LabStep
     title="Verify Password Reset Operation"
     image={image10}
     description="Verified that the password reset operation completed successfully through the Active Directory confirmation dialog. Successful confirmation indicates that the user's credentials have been updated in the domain and the account is ready for the next authentication using the newly assigned password."
     configuration={[
       'Password reset completed successfully',
       'Active Directory confirmation received',
       'User credentials updated',
       'Administrative password change verified',
       'Account ready for next authentication',
     ]}
     />
     
     <LabStep
     title="Configure User Logon Hours"
     image={image7}
     description="Configured logon hour restrictions for a domain user account using Active Directory Users and Computers (ADUC). The user's account was permitted to authenticate only during approved business hours, preventing logins outside the defined schedule. Logon hour restrictions are commonly used in enterprise environments to strengthen security and enforce organizational access policies."
     configuration={[
       'Configured Logon Hours policy',
       'Restricted authentication outside approved hours',
       'Applied account-level access control',
       'Enforced business-hour login policy',
       'Implemented Active Directory security controls',
     ]}
     />

     <LabStep
     title="Configure Security Group Membership"
     image={image16}
     description="Configured Active Directory security group membership by adding domain user accounts to the appropriate departmental security group. Assigning users to security groups simplifies access management by allowing permissions to be granted to groups rather than individual users, following the principle of role-based access control (RBAC)."
     configuration={[
       'Tool: Active Directory Users and Computers (ADUC)',
       'Security Group: Finance_Resource',
       'Added multiple domain users',
       'Membership managed through Active Directory',
       'Purpose: Role-Based Access Control (RBAC)',
       'Status: Security group membership configured',
     ]}
     />
     
     <LabStep
     title="Configure Group Policy Security Banner"
     image={image6}
     description="Configured a Group Policy Object (GPO) to display a custom security banner before users sign in to the domain. Interactive logon messages are commonly deployed in enterprise environments to present acceptable use policies, legal notices, or security warnings prior to authentication."
     configuration={[
       'Opened Group Policy Management Editor',
       'Configured Interactive Logon Message',
       'Applied custom security banner',
       'Configured enterprise login policy',
       'Managed domain security settings using GPO',
     ]}
     />

     
     <LabStep
     title="Configure Network Share Permissions"
     image={image8}
     description="Created a shared company folder and configured SMB share permissions by assigning access to the Finance_Resource security group instead of individual users. Managing permissions through security groups simplifies administration and follows enterprise access control best practices."
     configuration={[
       'Created Finance shared folder',
       'Configured SMB Share Permissions',
       'Assigned Finance_Resource security group',
       'Permissions managed through Active Directory groups',
       'Implemented Role-Based Access Control (RBAC)',
     ]}
     />

     <LabStep
     title="Configure NTFS File System Permissions"
     image={image5}
     description="Configured NTFS security permissions on the shared Finance folder to control access at the file system level. NTFS permissions provide granular security by defining which users and groups can read, modify, or manage files and folders stored on the server."
     configuration={[
       'Configured NTFS Security Permissions',
       'Verified inherited permissions',
       'Managed user and group access',
       'Applied file system security controls',
       'Implemented least privilege access principles',
     ]}
     />
     
     <LabStep
     title="Offboard and Disable User Account"
     image={image4}
     description="Performed a user offboarding task by disabling a domain user account within Active Directory. Disabling accounts prevents user authentication while preserving account information, making it the preferred approach during employee departures, extended leave, or security investigations."
     configuration={[
       'Selected existing domain user',
       'Disabled user account',
       'Performed user offboarding',
       'Prevented further domain authentication',
       'Maintained account for future audit and recovery',
     ]}
     />
    <LabConclusion>
     <p>
       This lab demonstrates the deployment and day-to-day administration of a
       Windows Server Active Directory environment, covering core identity and
       access management tasks including domain deployment, Organizational Unit
       design, user lifecycle management, security groups, Group Policy, password
       administration, shared resource permissions and basic enterprise security
       controls. These activities closely reflect the responsibilities performed
       by IT Support, Help Desk, System Administration, and Infrastructure teams
       in enterprise Windows environments.
     </p>
   
     <p className="mt-4">
       Active Directory is an extensive enterprise technology, and this lab
       represents the foundation of a much broader learning journey. Additional
       hands-on labs covering Group Policy administration, roaming profiles,
       folder redirection, delegated administration, domain-joined client
       management, DNS and DHCP integration, multi-domain environments,
       replication, trust relationships and advanced Active Directory security
       are currently in progress and will be added to this portfolio as they are
       completed.
     </p>
   </LabConclusion>
   
     
     

      </div>

    </main>
  );
}