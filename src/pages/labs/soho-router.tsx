import LabHeader from '../../components/Labs/LabHeader';
import LabInfo from '../../components/Labs/LabInfo';
import LabStep from '../../components/Labs/LabStep';

import image1 from '../../images/labs/soho-router/1.jpg';
import image2 from '../../images/labs/soho-router/2.jpg';
import image3 from '../../images/labs/soho-router/3.jpg';
import image4 from '../../images/labs/soho-router/4.jpg';
import image5 from '../../images/labs/soho-router/5.jpg';
import image6 from '../../images/labs/soho-router/6.jpg';
import image7 from '../../images/labs/soho-router/7.jpg';

export default function SohoRouterLab() {
  return (
    <main className="min-h-screen bg-neutral-900 px-6 py-16 text-white">

      <div className="mx-auto max-w-5xl">

        <LabHeader
          title="SOHO Router Configuration and Network Troubleshooting Lab"
          overview="This lab demonstrates the configuration of a TP-Link TL-WR841N SOHO wireless router using a web-based simulator on macOS. The lab covers wireless configuration, LAN and DHCP settings, Internet connectivity, and network troubleshooting using Terminal commands commonly used in IT Support environments."
        />

        <LabInfo>
          <table className="w-full">
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="p-4 font-semibold">Host OS</td>
                <td className="p-4">macOS</td>
              </tr>

              <tr className="border-b border-neutral-700">
                <td className="p-4 font-semibold">Router</td>
                <td className="p-4">
                  TP-Link TL-WR841N Wireless N Router (Simulator)
                </td>
              </tr>

              <tr className="border-b border-neutral-700">
                <td className="p-4 font-semibold">Network Type</td>
                <td className="p-4">SOHO</td>
              </tr>

              <tr className="border-b border-neutral-700">
                <td className="p-4 font-semibold">Configuration</td>
                <td className="p-4">
                  WAN, LAN, DHCP, Wireless
                </td>
              </tr>

              <tr>
                <td className="p-4 font-semibold">Tools Used</td>
                <td className="p-4">
                  Web Browser, macOS Terminal
                </td>
              </tr>
            </tbody>
          </table>
        </LabInfo>

        <LabStep
          title="Configure Wireless Network (SSID & Security)"
          image={image1}
          description="Configured the wireless settings of the TP-Link TL-WR841N router by assigning a custom SSID (wireless network name) and enabling WPA2-PSK security with a password. This configuration allows client devices to securely connect to the wireless network while protecting against unauthorized access."
        />

        <LabStep
          title="Configure DHCP Server Settings"
          image={image2}
          description="Configured the DHCP (Dynamic Host Configuration Protocol) server to automatically assign IP addresses to devices connecting to the local network. The DHCP server was enabled with an address pool ranging from 192.168.0.100 to 192.168.0.199, and the lease time was updated to 1440 minutes (24 hours) to provide efficient IP address management."
        />

        <LabStep
          title="Network Troubleshooting Using macOS Terminal (netstat)"
          image={image3}
          description="Used the netstat command in the macOS Terminal to display active network connections and TCP sessions. The command provides information about local and remote addresses, connection states, and network protocols currently in use. This is a common troubleshooting tool used by IT Support professionals to verify active connections, identify listening services, and diagnose network-related issues."
          configuration={[
            'Command Executed: netstat',
            'Displayed active TCP connections',
            'Verified established network sessions',
            'Viewed local and remote network addresses',
            'Performed basic network diagnostics using macOS Terminal',
          ]}
        />

        <LabStep
          title="Network Connectivity Testing Using ping"
          image={image4}
          description="Used the ping command in the macOS Terminal to verify network connectivity between the local machine and the default gateway (192.168.1.1). The command sends ICMP Echo Request packets and measures whether replies are received, making it one of the most commonly used tools for diagnosing basic network connectivity issues. The successful responses confirmed that the gateway was reachable and the network connection was functioning correctly."
          configuration={[
            'Command Executed: ping -c6 192.168.1.1',
            'Target Host: 192.168.1.1 (Default Gateway)',
            'Packets Sent: 6',
            'Packets Received: 6',
            'Packet Loss: 0%',
            'Connectivity Status: Successful',
          ]}
        />

        <LabStep
          title="Trace Network Path Using traceroute"
          image={image6}
          description="Used the traceroute command in the macOS Terminal to identify the path packets take from the local machine to Google's public servers. The command displays each network hop between the source and destination, helping identify latency, routing paths, and potential points of failure. Traceroute is commonly used by IT Support and Network Administrators to diagnose slow connections, routing issues, and ISP-related network problems."
          configuration={[
            'Command Executed: traceroute google.com',
            'Destination: google.com',
            'Displayed multiple network hops',
            'Verified successful route to the destination',
            'Observed latency for each network hop',
            'Used for network path and routing diagnostics',
          ]}
        />

    
        <LabStep
          title="Verify DNS Name Resolution Using nslookup"
          image={image7}
          description="Used the nslookup command in the macOS Terminal to verify Domain Name System (DNS) resolution. The command queried the configured DNS server to resolve multiple domain names (meta.com, google.com, and youtube.com) into their corresponding IP addresses. Successfully resolving these hostnames confirmed that DNS services were functioning correctly. DNS verification is a fundamental troubleshooting step when users report issues such as websites not loading despite having network connectivity."
          configuration={[
            'Command Executed: nslookup meta.com',
            'Command Executed: nslookup google.com',
            'Command Executed: nslookup youtube.com',
            'Verified DNS server responsiveness',
            'Successfully resolved hostnames to IP addresses',
            'Confirmed proper DNS name resolution',
          ]}
        />

        <LabStep
          title="Configure DHCP Address Reservation"
          image={image5}
          description="Configured DHCP Address Reservation on the TP-Link TL-WR841N router to associate a specific IP address with a device's MAC address. This ensures that the selected device always receives the same IP address from the DHCP server while still benefiting from automatic IP assignment. Address Reservation is commonly used for devices such as printers, servers, NAS devices, and other systems that require a consistent IP address for reliable network communication."
          configuration={[
            'Feature Configured: DHCP Address Reservation',
            'Reserved IP Address: 192.168.0.11',
            'Device Identified by MAC Address',
            'Ensures consistent IP assignment',
            'Used for devices requiring a fixed IP address',
          ]}
        />
        <section className="mt-20">
          <h2 className="mb-8 text-3xl font-bold text-white">
            Skills Demonstrated
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              'SOHO Router Configuration',
              'Wireless Security (WPA2-PSK)',
              'DHCP Configuration',
              'DHCP Address Reservation',
              'DNS Troubleshooting',
              'Network Connectivity Testing',
              'Traceroute',
              'Netstat',
              'macOS Terminal',
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

      </div>

    </main>
  );
}