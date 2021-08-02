// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';

import type {IntlShape} from 'react-intl';

export interface CallbackFunctionWithoutArguments {
    (): void;
}

export interface ActionCallback {
    (callback: CallbackFunctionWithoutArguments): void;
}

export interface ActionProps {
    action: (callback: CallbackFunctionWithoutArguments) => void;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    visible: boolean;
}

export interface ActionsProps {
    canDownloadFiles: boolean;
    downloadAction: ActionCallback;
    file: FileInfo;
    linkAction: ActionCallback;
}

export interface AvatarProps {
    avatarUri?: string;
    theme: Theme;
}

export interface DetailsProps {
    channel?: string;
    isDirect?: boolean;
    ownPost?: boolean;
    user?: string;
}

export interface PrepareFileRef {
    start(file: FileInfo, share?: boolean): Promise<string | undefined>;
}

export interface FooterProps {
    intl: IntlShape;
    file: FileInfo;
}

export interface FooterRef {
    toggle(): boolean;
    isVisible(): boolean;
}

export interface GalleryProps {
    files: FileInfo[];
    footerVisible: boolean;
    height: number;
    initialIndex: number;
    isLandscape: boolean;
    onClose: CallbackFunctionWithoutArguments;
    onPageSelected: (index: number) => void;
    onTap: CallbackFunctionWithoutArguments;
    width: number;
    theme: Theme;
}

export interface GalleryItemProps {
    file: FileInfo;
    deviceHeight: number;
    deviceWidth: number;
    intl?: IntlShape;
    isActive?: boolean;
    onDoubleTap?: CallbackFunctionWithoutArguments;
    style?: StyleProp<Animated.AnimateStyle>;
    theme?: Theme;
}

export interface ManagedConfig {
    [key: string]: string;
}

export interface ShowToast {
    (text: string, duration?: number, callback?: () => void): void;
}

export interface SummaryProps {
    avatarUri?: string;
    channelName?: string;
    copyPublicLink: ActionCallback;
    displayName?: string;
    dowloadFile: ActionCallback;
    file: FileInfo;
    isDirectChannel: boolean;
    isLandscape: boolean;
    ownPost: boolean;
    theme: Theme;
}

export interface ToastProps {
    theme: Theme;
}

export interface ToastRef {
    show: ShowToast;
}

export interface ToastState {
    animation?: Animated.CompositeAnimation;
    duration?: number;
    callback?: () => void;
}
