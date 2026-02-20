<?php
/**
 * Copyright (C) EC Brands Corporation - All Rights Reserved
 * Contact Licensing@ECInternet.com for use guidelines
 */
declare(strict_types=1);

namespace ECInternet\Rollbar\Block\Rollbar;

use Magento\Framework\View\Element\Template;
use Magento\Store\Model\ScopeInterface;

class Config extends Template
{
    private const XML_PATH_ENABLED      = 'rollbar_js/general/enabled';

    private const XML_PATH_CLIENT_TOKEN = 'rollbar_js/general/client_token';

    private const XML_PATH_ENVIRONMENT  = 'rollbar_js/general/environment';

    public function isEnabled(): bool
    {
        return $this->_scopeConfig->isSetFlag(self::XML_PATH_ENABLED, ScopeInterface::SCOPE_STORE);
    }

    public function getClientToken(): string
    {
        return (string)$this->_scopeConfig->getValue(self::XML_PATH_CLIENT_TOKEN, ScopeInterface::SCOPE_STORE);
    }

    public function getEnvironment(): string
    {
        $env = (string)$this->_scopeConfig->getValue(self::XML_PATH_ENVIRONMENT, ScopeInterface::SCOPE_STORE);

        return $env !== '' ? $env : 'production';
    }
}
