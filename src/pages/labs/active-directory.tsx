import LabHeader from '../../components/Labs/LabHeader';
import LabInfo from '../../components/Labs/LabInfo';
import LabStep from '../../components/Labs/LabStep';


import image14 from '../../images/labs/active-directory/14.jpg';


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

      </div>

    </main>
  );
}