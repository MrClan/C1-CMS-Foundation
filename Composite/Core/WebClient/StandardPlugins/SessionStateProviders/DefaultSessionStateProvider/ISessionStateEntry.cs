﻿using System;
using Composite.Data;

namespace Composite.Plugins.WebClient.SessionStateProviders.DefaultSessionStateProvider
{
    /// <exclude />
    [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)] 
    [Title("Session State Entry")]
    [AutoUpdateble]
    [ImmutableTypeId("{91964c1b-35c1-446c-9e47-6b8d8e65997f}")]
    [KeyPropertyName("Id")]
    [DataScope(DataScopeIdentifier.AdministratedName)]
    [Caching(CachingType.Full)]
    public interface ISessionStateEntry : IData
    {
        /// <exclude />
        [StoreFieldType(PhysicalStoreFieldType.Guid)]
        [ImmutableFieldId("{8e0f00dc-a364-4bdc-bed4-0fa771cce148}")]
        Guid Id { get; set; }

        /// <exclude />
        [StoreFieldType(PhysicalStoreFieldType.DateTime)]
        [ImmutableFieldId("{f2ba2a81-cd6a-4e48-8f12-a4446a1df046}")]
        DateTime ExpirationDate { get; set; }

        /// <exclude />
        [StoreFieldType(PhysicalStoreFieldType.LargeString)]
        [ImmutableFieldId("{174b9f86-c45b-434a-a3a1-083f78fcfa93}")]
        string SerializedValue { get; set; }
    }
}
