//
//  DeviceDetailsModule.m
//  rakBank
//
//  Created by shamshir anees on 07/02/22.
//

#import <Foundation/Foundation.h>


#import "React/RCTBridgeModule.h"
@interface
RCT_EXTERN_MODULE(DeviceDetailsModule, NSObject)
RCT_EXTERN_METHOD(getDeviceModel: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject)

@end
