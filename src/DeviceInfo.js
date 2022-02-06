import { getDeviceName, getUniqueId, getMacAddress, getIpAddress } from 'react-native-device-info';
import React from 'react'
import { Platform } from 'react-native'

export default async function deviceinfo() {
    const deviceInfos = {
        OS: Platform.OS,
        IMEI: getUniqueId()

    }

    return Promise.all([getDeviceName(), getMacAddress(), getIpAddress()])
        .then(results => {
            const deviceInfoResults = {
                deviceName: results[0],
                macAddress: results[1],
                ipAddress: results[2],
            }
            const deviceData = { ...deviceInfos, ...deviceInfoResults }
            return deviceData
        });

}




