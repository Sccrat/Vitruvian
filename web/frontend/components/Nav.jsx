import { Frame, Navigation } from '@shopify/polaris';
import { HomeMinor, OrdersMinor, ProductsMinor } from '@shopify/polaris-icons';
import React from 'react';

export function Nav() {
    return (
            <Frame>
                <Navigation location="/">
                    <Navigation.Section
                        items={[
                            {
                                url: '/',
                                label: 'Home',
                                icon: HomeMinor,
                            },
                            {
                                url: '/feature',
                                label: 'Listado',
                                icon: OrdersMinor,
                            },
                        ]}
                    />
                </Navigation>

            </Frame>
        
    );
}