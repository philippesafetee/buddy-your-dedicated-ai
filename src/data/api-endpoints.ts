import type { Language } from "@/components/api-docs/LanguageSelector";

const BASE_URL = "https://api.ai-buddy.co/v1";

export interface Endpoint {
  id: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  path: string;
  description: string;
  examples: Record<Language, string>;
  response: string;
  queryParams?: { name: string; type: string; description: string; required?: boolean }[];
  bodyParams?: { name: string; type: string; description: string; required?: boolean }[];
}

export interface EndpointSection {
  title: string;
  description: string;
  endpoints: Endpoint[];
}

export const apiSections: EndpointSection[] = [
  {
    title: "Instances",
    description: "Gérez les instances OpenClaw déployées pour vos clients.",
    endpoints: [
      {
        id: "list-instances",
        method: "GET",
        path: "/v1/instances",
        description: "Liste toutes les instances de votre tenant.",
        queryParams: [
          { name: "status", type: "string", description: "Filtrer par statut (provisioning, ready, paused, destroyed)" },
          { name: "limit", type: "number", description: "Nombre max de résultats (défaut: 50, max: 100)" },
          { name: "offset", type: "number", description: "Offset pour la pagination" },
        ],
        examples: {
          curl: `curl -X GET "${BASE_URL}/instances" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
          javascript: `const response = await fetch("${BASE_URL}/instances", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  }
});

const data = await response.json();
console.log(data.instances);`,
          python: `import requests

response = requests.get(
    "${BASE_URL}/instances",
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    }
)

data = response.json()
print(data["instances"])`,
          go: `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, _ := http.NewRequest("GET", "${BASE_URL}/instances", nil)
    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")
    req.Header.Add("Content-Type", "application/json")
    
    resp, _ := client.Do(req)
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,
          php: `<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "${BASE_URL}/instances");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer YOUR_API_KEY",
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
$data = json_decode($response, true);
print_r($data["instances"]);`,
          ruby: `require 'net/http'
require 'json'

uri = URI("${BASE_URL}/instances")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Get.new(uri)
request["Authorization"] = "Bearer YOUR_API_KEY"
request["Content-Type"] = "application/json"

response = http.request(request)
data = JSON.parse(response.body)
puts data["instances"]`,
        },
        response: `{
  "instances": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Client A",
      "status": "ready",
      "channel_type": "telegram",
      "ai_provider": "openai",
      "open_api_bindings": [
        {
          "open_api_spec_version_id": "660e8400-e29b-41d4-a716-446655440001",
          "open_api_spec_version": {
            "id": "660e8400-e29b-41d4-a716-446655440001",
            "version": "1.0",
            "open_api_spec_id": "770e8400-e29b-41d4-a716-446655440002",
            "open_api_spec_name": "Tenant API"
          }
        }
      ],
      "deployed_buddy_version": "1.0.0",
      "created_at": "2025-01-30T12:00:00Z",
      "updated_at": "2025-01-30T12:05:00Z"
    }
  ],
  "total": 1
}`,
      },
      {
        id: "get-instance",
        method: "GET",
        path: "/v1/instances/{instance_id}",
        description: "Récupère les détails d'une instance spécifique.",
        examples: {
          curl: `curl -X GET "${BASE_URL}/instances/550e8400-e29b-41d4-a716-446655440000" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
          javascript: `const instanceId = "550e8400-e29b-41d4-a716-446655440000";
const response = await fetch(\`${BASE_URL}/instances/\${instanceId}\`, {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  }
});

const instance = await response.json();
console.log(instance);`,
          python: `import requests

instance_id = "550e8400-e29b-41d4-a716-446655440000"
response = requests.get(
    f"${BASE_URL}/instances/{instance_id}",
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    }
)

instance = response.json()
print(instance)`,
          go: `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    instanceId := "550e8400-e29b-41d4-a716-446655440000"
    client := &http.Client{}
    req, _ := http.NewRequest("GET", "${BASE_URL}/instances/"+instanceId, nil)
    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")
    
    resp, _ := client.Do(req)
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,
          php: `<?php
$instanceId = "550e8400-e29b-41d4-a716-446655440000";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "${BASE_URL}/instances/$instanceId");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer YOUR_API_KEY",
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
$instance = json_decode($response, true);
print_r($instance);`,
          ruby: `require 'net/http'
require 'json'

instance_id = "550e8400-e29b-41d4-a716-446655440000"
uri = URI("${BASE_URL}/instances/#{instance_id}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Get.new(uri)
request["Authorization"] = "Bearer YOUR_API_KEY"

response = http.request(request)
instance = JSON.parse(response.body)
puts instance`,
        },
        response: `{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Client A",
  "status": "ready",
  "channel_type": "telegram",
  "ai_provider": "openai",
  "open_api_bindings": [...],
  "deployed_buddy_version": "1.0.0",
  "created_at": "2025-01-30T12:00:00Z",
  "updated_at": "2025-01-30T12:05:00Z"
}`,
      },
      {
        id: "create-instance",
        method: "POST",
        path: "/v1/instances",
        description: "Crée une nouvelle instance OpenClaw pour un client.",
        bodyParams: [
          { name: "name", type: "string", required: true, description: "Nom de l'instance (ex: 'Client A')" },
          { name: "ai_provider", type: "string", required: true, description: "Fournisseur IA: openai, anthropic" },
          { name: "ai_api_key", type: "string", required: true, description: "Clé API du fournisseur IA" },
          { name: "channel", type: "object", required: true, description: "Configuration du canal (type, token)" },
          { name: "open_api_bindings", type: "array", description: "Bindings OpenAPI avec auth_client par binding" },
          { name: "skills", type: "array", description: "Liste des skills à activer" },
        ],
        examples: {
          curl: `curl -X POST "${BASE_URL}/instances" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Client A",
    "ai_provider": "openai",
    "ai_api_key": "sk-...",
    "channel": {
      "type": "telegram",
      "token": "123456:ABC-DEF..."
    },
    "open_api_bindings": [
      {
        "open_api_spec_version_id": "660e8400-e29b-41d4-a716-446655440001",
        "auth_client": { "api_key": "sk_tenant_client_abc" }
      }
    ],
    "skills": ["buddy"]
  }'`,
          javascript: `const response = await fetch("${BASE_URL}/instances", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Client A",
    ai_provider: "openai",
    ai_api_key: "sk-...",
    channel: {
      type: "telegram",
      token: "123456:ABC-DEF..."
    },
    open_api_bindings: [
      {
        open_api_spec_version_id: "660e8400-e29b-41d4-a716-446655440001",
        auth_client: { api_key: "sk_tenant_client_abc" }
      }
    ],
    skills: ["buddy"]
  })
});

const instance = await response.json();
console.log(instance);`,
          python: `import requests

response = requests.post(
    "${BASE_URL}/instances",
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    },
    json={
        "name": "Client A",
        "ai_provider": "openai",
        "ai_api_key": "sk-...",
        "channel": {
            "type": "telegram",
            "token": "123456:ABC-DEF..."
        },
        "open_api_bindings": [
            {
                "open_api_spec_version_id": "660e8400-...",
                "auth_client": {"api_key": "sk_tenant_client_abc"}
            }
        ],
        "skills": ["buddy"]
    }
)

instance = response.json()
print(instance)`,
          go: `package main

import (
    "bytes"
    "encoding/json"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "name": "Client A",
        "ai_provider": "openai",
        "ai_api_key": "sk-...",
        "channel": map[string]string{
            "type": "telegram",
            "token": "123456:ABC-DEF...",
        },
        "open_api_bindings": []map[string]interface{}{
            {
                "open_api_spec_version_id": "660e8400-...",
                "auth_client": map[string]string{"api_key": "sk_tenant_client_abc"},
            },
        },
        "skills": []string{"buddy"},
    }
    
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${BASE_URL}/instances", bytes.NewBuffer(body))
    req.Header.Add("Authorization", "Bearer YOUR_API_KEY")
    req.Header.Add("Content-Type", "application/json")
    
    client := &http.Client{}
    client.Do(req)
}`,
          php: `<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "${BASE_URL}/instances");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer YOUR_API_KEY",
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "name" => "Client A",
    "ai_provider" => "openai",
    "ai_api_key" => "sk-...",
    "channel" => ["type" => "telegram", "token" => "123456:ABC-DEF..."],
    "open_api_bindings" => [
        [
            "open_api_spec_version_id" => "660e8400-...",
            "auth_client" => ["api_key" => "sk_tenant_client_abc"]
        ]
    ],
    "skills" => ["buddy"]
]));

$response = curl_exec($ch);
$instance = json_decode($response, true);
print_r($instance);`,
          ruby: `require 'net/http'
require 'json'

uri = URI("${BASE_URL}/instances")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Post.new(uri)
request["Authorization"] = "Bearer YOUR_API_KEY"
request["Content-Type"] = "application/json"
request.body = {
  name: "Client A",
  ai_provider: "openai",
  ai_api_key: "sk-...",
  channel: { type: "telegram", token: "123456:ABC-DEF..." },
  open_api_bindings: [
    {
      open_api_spec_version_id: "660e8400-...",
      auth_client: { api_key: "sk_tenant_client_abc" }
    }
  ],
  skills: ["buddy"]
}.to_json

response = http.request(request)
instance = JSON.parse(response.body)
puts instance`,
        },
        response: `{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Client A",
  "status": "provisioning",
  "channel_type": "telegram",
  "ai_provider": "openai",
  "open_api_bindings": [...],
  "deployed_buddy_version": "",
  "created_at": "2025-01-30T12:00:00Z",
  "updated_at": "2025-01-30T12:00:00Z"
}`,
      },
      {
        id: "pause-instance",
        method: "POST",
        path: "/v1/instances/{instance_id}/pause",
        description: "Met en pause une instance. La VM est arrêtée.",
        examples: {
          curl: `curl -X POST "${BASE_URL}/instances/550e8400-e29b-41d4-a716-446655440000/pause" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
          javascript: `const instanceId = "550e8400-e29b-41d4-a716-446655440000";
const response = await fetch(\`${BASE_URL}/instances/\${instanceId}/pause\`, {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY"
  }
});

const result = await response.json();`,
          python: `import requests

instance_id = "550e8400-e29b-41d4-a716-446655440000"
response = requests.post(
    f"${BASE_URL}/instances/{instance_id}/pause",
    headers={"Authorization": "Bearer YOUR_API_KEY"}
)`,
          go: `req, _ := http.NewRequest("POST", "${BASE_URL}/instances/550e8400.../pause", nil)
req.Header.Add("Authorization", "Bearer YOUR_API_KEY")
client := &http.Client{}
client.Do(req)`,
          php: `<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "${BASE_URL}/instances/550e8400.../pause");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer YOUR_API_KEY"]);
curl_exec($ch);`,
          ruby: `uri = URI("${BASE_URL}/instances/550e8400.../pause")
request = Net::HTTP::Post.new(uri)
request["Authorization"] = "Bearer YOUR_API_KEY"
http.request(request)`,
        },
        response: `{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "paused",
  ...
}`,
      },
      {
        id: "destroy-instance",
        method: "DELETE",
        path: "/v1/instances/{instance_id}",
        description: "Détruit une instance. La VM et les données sont supprimées.",
        examples: {
          curl: `curl -X DELETE "${BASE_URL}/instances/550e8400-e29b-41d4-a716-446655440000" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
          javascript: `const instanceId = "550e8400-e29b-41d4-a716-446655440000";
await fetch(\`${BASE_URL}/instances/\${instanceId}\`, {
  method: "DELETE",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY"
  }
});`,
          python: `import requests

instance_id = "550e8400-e29b-41d4-a716-446655440000"
requests.delete(
    f"${BASE_URL}/instances/{instance_id}",
    headers={"Authorization": "Bearer YOUR_API_KEY"}
)`,
          go: `req, _ := http.NewRequest("DELETE", "${BASE_URL}/instances/550e8400...", nil)
req.Header.Add("Authorization", "Bearer YOUR_API_KEY")
client := &http.Client{}
client.Do(req)`,
          php: `<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "${BASE_URL}/instances/550e8400...");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer YOUR_API_KEY"]);
curl_exec($ch);`,
          ruby: `uri = URI("${BASE_URL}/instances/550e8400...")
request = Net::HTTP::Delete.new(uri)
request["Authorization"] = "Bearer YOUR_API_KEY"
http.request(request)`,
        },
        response: `{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "destroyed",
  ...
}`,
      },
    ],
  },
  {
    title: "OpenAPI Specs",
    description: "Gérez vos spécifications OpenAPI et leurs versions.",
    endpoints: [
      {
        id: "list-specs",
        method: "GET",
        path: "/v1/openapi-specs",
        description: "Liste toutes les spécifications OpenAPI de votre tenant.",
        examples: {
          curl: `curl -X GET "${BASE_URL}/openapi-specs" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
          javascript: `const response = await fetch("${BASE_URL}/openapi-specs", {
  headers: { "Authorization": "Bearer YOUR_API_KEY" }
});
const data = await response.json();`,
          python: `response = requests.get(
    "${BASE_URL}/openapi-specs",
    headers={"Authorization": "Bearer YOUR_API_KEY"}
)`,
          go: `req, _ := http.NewRequest("GET", "${BASE_URL}/openapi-specs", nil)
req.Header.Add("Authorization", "Bearer YOUR_API_KEY")`,
          php: `curl_setopt($ch, CURLOPT_URL, "${BASE_URL}/openapi-specs");`,
          ruby: `uri = URI("${BASE_URL}/openapi-specs")`,
        },
        response: `{
  "openapi_specs": [
    {
      "id": "770e8400-e29b-41d4-a716-446655440002",
      "name": "Tenant API",
      "created_at": "2025-01-30T10:00:00Z",
      "updated_at": "2025-01-30T10:00:00Z"
    }
  ],
  "total": 1
}`,
      },
      {
        id: "create-spec",
        method: "POST",
        path: "/v1/openapi-specs",
        description: "Crée une nouvelle spécification OpenAPI.",
        bodyParams: [
          { name: "name", type: "string", required: true, description: "Nom de la spécification" },
        ],
        examples: {
          curl: `curl -X POST "${BASE_URL}/openapi-specs" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Tenant API"}'`,
          javascript: `const response = await fetch("${BASE_URL}/openapi-specs", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "Tenant API" })
});`,
          python: `response = requests.post(
    "${BASE_URL}/openapi-specs",
    headers={"Authorization": "Bearer YOUR_API_KEY"},
    json={"name": "Tenant API"}
)`,
          go: `payload := map[string]string{"name": "Tenant API"}
body, _ := json.Marshal(payload)
req, _ := http.NewRequest("POST", "${BASE_URL}/openapi-specs", bytes.NewBuffer(body))`,
          php: `curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["name" => "Tenant API"]));`,
          ruby: `request.body = { name: "Tenant API" }.to_json`,
        },
        response: `{
  "id": "770e8400-e29b-41d4-a716-446655440002",
  "name": "Tenant API",
  "created_at": "2025-01-30T10:00:00Z",
  "updated_at": "2025-01-30T10:00:00Z"
}`,
      },
      {
        id: "create-version",
        method: "POST",
        path: "/v1/openapi-specs/{spec_id}/versions",
        description: "Upload une nouvelle version d'une spécification OpenAPI (multipart/form-data).",
        bodyParams: [
          { name: "version", type: "string", required: true, description: "Label de version (ex: '1.0', '2025-01-30')" },
          { name: "file", type: "file", required: true, description: "Fichier OpenAPI (YAML ou JSON)" },
          { name: "endpoint_url_overrides", type: "string", description: "JSON object avec les overrides d'URL" },
        ],
        examples: {
          curl: `curl -X POST "${BASE_URL}/openapi-specs/770e8400.../versions" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "version=1.0" \\
  -F "file=@openapi.yaml"`,
          javascript: `const formData = new FormData();
formData.append("version", "1.0");
formData.append("file", fileBlob, "openapi.yaml");

const response = await fetch(\`${BASE_URL}/openapi-specs/770e8400.../versions\`, {
  method: "POST",
  headers: { "Authorization": "Bearer YOUR_API_KEY" },
  body: formData
});`,
          python: `with open("openapi.yaml", "rb") as f:
    response = requests.post(
        "${BASE_URL}/openapi-specs/770e8400.../versions",
        headers={"Authorization": "Bearer YOUR_API_KEY"},
        files={"file": f},
        data={"version": "1.0"}
    )`,
          go: `// Use multipart form data with Go's mime/multipart package`,
          php: `$ch = curl_init();
curl_setopt($ch, CURLOPT_POSTFIELDS, [
    "version" => "1.0",
    "file" => new CURLFile("openapi.yaml")
]);`,
          ruby: `# Use Net::HTTP::Post with multipart form data`,
        },
        response: `{
  "id": "660e8400-e29b-41d4-a716-446655440001",
  "version": "1.0",
  "open_api_spec_id": "770e8400-e29b-41d4-a716-446655440002",
  "created_at": "2025-01-30T11:00:00Z"
}`,
      },
    ],
  },
  {
    title: "Authentification",
    description: "Endpoints pour l'authentification et la gestion des sessions.",
    endpoints: [
      {
        id: "health",
        method: "GET",
        path: "/v1/health",
        description: "Health check (sans authentification).",
        examples: {
          curl: `curl -X GET "${BASE_URL}/health"`,
          javascript: `const response = await fetch("${BASE_URL}/health");
const data = await response.json();`,
          python: `response = requests.get("${BASE_URL}/health")`,
          go: `resp, _ := http.Get("${BASE_URL}/health")`,
          php: `file_get_contents("${BASE_URL}/health");`,
          ruby: `Net::HTTP.get(URI("${BASE_URL}/health"))`,
        },
        response: `{
  "status": "ok"
}`,
      },
      {
        id: "register",
        method: "POST",
        path: "/v1/auth/register",
        description: "Crée un nouveau tenant et utilisateur.",
        bodyParams: [
          { name: "email", type: "string", required: true, description: "Email de l'utilisateur" },
          { name: "password", type: "string", required: true, description: "Mot de passe" },
          { name: "organization_name", type: "string", required: true, description: "Nom de l'organisation" },
        ],
        examples: {
          curl: `curl -X POST "${BASE_URL}/auth/register" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "admin@acme.com",
    "password": "securepassword",
    "organization_name": "Acme Corp"
  }'`,
          javascript: `const response = await fetch("${BASE_URL}/auth/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "admin@acme.com",
    password: "securepassword",
    organization_name: "Acme Corp"
  })
});`,
          python: `response = requests.post(
    "${BASE_URL}/auth/register",
    json={
        "email": "admin@acme.com",
        "password": "securepassword",
        "organization_name": "Acme Corp"
    }
)`,
          go: `payload := map[string]string{
    "email": "admin@acme.com",
    "password": "securepassword",
    "organization_name": "Acme Corp",
}`,
          php: `$data = [
    "email" => "admin@acme.com",
    "password" => "securepassword",
    "organization_name" => "Acme Corp"
];`,
          ruby: `request.body = {
  email: "admin@acme.com",
  password: "securepassword",
  organization_name: "Acme Corp"
}.to_json`,
        },
        response: `{
  "message": "Account created. You can now log in via Keycloak.",
  "login_url": "https://auth.buddy.example/realms/acme/..."
}`,
      },
    ],
  },
];
